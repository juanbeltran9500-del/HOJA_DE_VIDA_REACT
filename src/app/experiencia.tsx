
import { Ionicons } from '@expo/vector-icons';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import TarjetaExperiencia from '../components/TarjetaExperiencia';

export default function Experiencia() {
  return (
    <ScrollView
      style={estilos.contenedor}
      contentContainerStyle={estilos.contenido}
    >
      <View style={estilos.encabezado}>
        <Ionicons
          name="briefcase-outline"
          size={65}
          color="#2563EB"
        />

        <Text style={estilos.nombre}>
          Juan Beltrán
        </Text>

        <Text style={estilos.subtitulo}>
          Experiencia y Proyectos
        </Text>
      </View>

      <Text style={estilos.titulo}>
        Mi Experiencia
      </Text>

      <TarjetaExperiencia
        cargo="Desarrollador Frontend"
        empresa="Proyecto Formativo DataVentor - SENA"
        periodo="2025 - 2026"
        descripcion="Desarrollo de interfaces web utilizando React, TypeScript, HTML y CSS. Participación en la creación de pantallas y componentes para un sistema de gestión de equipos tecnológicos."
      />

      <TarjetaExperiencia
        cargo="Desarrollador de Software"
        empresa="Proyecto Académico Salud para Todos"
        periodo="2024 - 2025"
        descripcion="Participación en el desarrollo de una aplicación web para la gestión de citas odontológicas utilizando Python, Flask, MySQL, HTML y CSS."
      />

      <TarjetaExperiencia
        cargo="Formación en Desarrollo de Software"
        empresa="SENA - CGMLTI"
        periodo="En formación"
        descripcion="Desarrollo de actividades académicas relacionadas con programación, bases de datos, pruebas de software y metodologías de desarrollo."
      />
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
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#214D80',
    marginBottom: 10,
  },
});
