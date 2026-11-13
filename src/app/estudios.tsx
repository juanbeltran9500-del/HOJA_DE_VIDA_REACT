
import { Ionicons } from '@expo/vector-icons';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import TarjetaEstudio from '../components/TarjetaEstudio';

export default function Estudios() {
  return (
    <ScrollView
      style={estilos.contenedor}
      contentContainerStyle={estilos.contenido}
    >
      <View style={estilos.encabezado}>
        <Ionicons
          name="school"
          size={65}
          color="#2563EB"
        />

        <Text style={estilos.nombre}>
          Juan Beltrán
        </Text>

        <Text style={estilos.subtitulo}>
          Formación Académica
        </Text>
      </View>

      <View style={estilos.seccion}>
        <Text style={estilos.titulo}>
          Mis Estudios
        </Text>

        <TarjetaEstudio
          titulo="Bachiller Académico"
          institucion="Institución Educativa"
          anio={2023}
          enCurso={false}
        />

        <TarjetaEstudio
          titulo="Formación en Inglés - Nivel A2"
          institucion="American School Way"
          anio={2026}
          enCurso={true}
        />

        <TarjetaEstudio
          titulo="Tecnólogo en Análisis y Desarrollo de Software"
          institucion="SENA - CGMLTI"
          anio={2026}
          enCurso={true}
        />
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#F4F7FB',
  },
  contenido: {
    padding: 20,
    paddingBottom: 35,
  },
  encabezado: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 25,
  },
  nombre: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#214D80',
    marginTop: 10,
  },
  subtitulo: {
    fontSize: 16,
    color: '#64748B',
    marginTop: 5,
  },
  seccion: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    elevation: 3,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#214D80',
    marginBottom: 12,
  },
});
