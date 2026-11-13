
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  titulo: string;
  institucion: string;
  anio: number;
  enCurso: boolean;
};

export default function TarjetaEstudio({
  titulo,
  institucion,
  anio,
  enCurso,
}: Props) {
  return (
    <View
      style={[
        estilos.tarjeta,
        enCurso ? estilos.enCurso : estilos.finalizado,
      ]}
    >
      <Text style={estilos.titulo}>{titulo}</Text>

      {enCurso && (
        <View style={estilos.insignia}>
          <Text style={estilos.textoInsignia}>
            En Curso
          </Text>
        </View>
      )}

      <Text style={estilos.subtitulo}>
        {institucion}
      </Text>

      <Text style={estilos.anio}>
        {anio}
      </Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  tarjeta: {
    padding: 16,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 1,
  },
  finalizado: {
    backgroundColor: '#FFFFFF',
    borderColor: '#CCCCCC',
  },
  enCurso: {
    backgroundColor: '#E8EFFF',
    borderColor: '#536DFE',
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#214D80',
  },
  subtitulo: {
    fontSize: 14,
    color: '#555555',
    marginTop: 5,
  },
  anio: {
    fontSize: 12,
    color: '#888888',
    marginTop: 4,
  },
  insignia: {
    backgroundColor: '#7B2CBF',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  textoInsignia: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
