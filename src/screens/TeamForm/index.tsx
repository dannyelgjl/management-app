import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { Controller } from 'react-hook-form';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Skeleton } from '../../components/Skeleton';
import { getTeamPreviewColor } from '../../utils/team';
import { styles } from './styles';
import { useContainer } from './useContainer';

function FieldSkeleton({ multiline = false }: { multiline?: boolean }) {
  return (
    <View style={styles.field}>
      <Skeleton width={78} height={13} />
      <Skeleton height={multiline ? 110 : 46} />
    </View>
  );
}

function FormSkeleton() {
  return (
    <>
      <View style={styles.heroPanel}>
        <Skeleton width={82} height={13} />
        <Skeleton width="58%" height={34} />
        <Skeleton width={110} height={36} borderRadius={999} />
      </View>

      <View style={styles.sectionCard}>
        <Skeleton width={118} height={18} />
        <FieldSkeleton />
        <FieldSkeleton multiline />
      </View>

      <View style={styles.sectionCard}>
        <Skeleton width={94} height={18} />
        <View style={styles.swatchRow}>
          {[0, 1, 2, 3].map((item) => (
            <Skeleton key={item} width={42} height={42} borderRadius={999} />
          ))}
        </View>
        <FieldSkeleton />
      </View>
    </>
  );
}

const TeamForm = () => {
  const {
    colorOptions,
    control,
    errors,
    hasMutationError,
    isEditing,
    isBusy,
    isLoading,
    selectedColor,
    goBack,
    selectColor,
    submit,
  } = useContainer();
  const previewColor = getTeamPreviewColor(selectedColor);

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
          {isLoading ? (
            <FormSkeleton />
          ) : (
            <>
              <View style={styles.heroPanel}>
                <View style={styles.heroTopRow}>
                  <Text style={styles.heroEyebrow}>
                    {isEditing ? 'Edição' : 'Cadastro'}
                  </Text>
                  <Button
                    title="Voltar"
                    onPress={goBack}
                    variant="outline"
                    size="small"
                    fitContent
                    style={styles.heroBackButton}
                    textStyle={styles.heroBackButtonText}
                  />
                </View>

                <Text style={styles.heroTitle}>
                  {isEditing ? 'Editar time' : 'Novo time'}
                </Text>

                <View style={styles.heroPreview}>
                  <View
                    style={[
                      styles.heroPreviewDot,
                      { backgroundColor: previewColor },
                    ]}
                  />
                  <Text style={styles.heroPreviewText}>{selectedColor}</Text>
                </View>
              </View>

              <View style={styles.sectionCard}>
                <Text style={styles.sectionTitle}>Dados do time</Text>

                <View style={styles.field}>
                  <Controller
                    control={control}
                    name="name"
                    render={({ field: { onBlur, onChange, value } }) => (
                      <Input
                        label="Nome"
                        value={value}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        placeholder="Ex.: Produto"
                        error={errors.name?.message}
                      />
                    )}
                  />
                </View>

                <View style={styles.field}>
                  <Controller
                    control={control}
                    name="description"
                    render={({ field: { onBlur, onChange, value } }) => (
                      <Input
                        label="Descrição"
                        value={value}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        placeholder="Responsabilidades do time"
                        multiline
                        error={errors.description?.message}
                      />
                    )}
                  />
                </View>
              </View>

              <View style={styles.sectionCard}>
                <Text style={styles.sectionTitle}>Cor do time</Text>

                <View style={styles.swatchRow}>
                  {colorOptions.map((colorHex) => (
                    <Pressable
                      key={colorHex}
                      accessibilityRole="button"
                      onPress={() => selectColor(colorHex)}
                      style={[
                        styles.swatch,
                        selectedColor.toUpperCase() === colorHex.toUpperCase() &&
                          styles.swatchSelected,
                      ]}>
                      <View
                        style={[
                          styles.swatchInner,
                          { backgroundColor: colorHex },
                        ]}
                      />
                    </Pressable>
                  ))}
                </View>

                <Controller
                  control={control}
                  name="colorHex"
                  render={({ field: { onBlur, onChange, value } }) => (
                    <Input
                      label="Hexadecimal"
                      value={value}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      placeholder="#2563EB"
                      autoCapitalize="characters"
                      error={errors.colorHex?.message}
                    />
                  )}
                />
              </View>
            </>
          )}
        </ScrollView>

        <View style={styles.footer}>
          {hasMutationError ? (
            <View style={styles.errorBox}>
              <Text style={styles.errorBoxText}>
                Não foi possível salvar o time. Confira os dados e tente novamente.
              </Text>
            </View>
          ) : null}

          <Button
            title={isEditing ? 'Salvar alterações' : 'Criar time'}
            disabled={isBusy || isLoading}
            loading={isBusy}
            onPress={submit}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default TeamForm;
