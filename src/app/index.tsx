
import { Ionicons } from '@expo/vector-icons';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MiBoton from '../components/MiBoton';

export default function Inicio() {
  return (
    <ScrollView
      style={estilos.contenedor}
      contentContainerStyle={estilos.contenido}
    >
      <View style={estilos.encabezado}>
        <Ionicons
          name="person-circle-outline"
          size={100}
          color="#2563EB"
        />

        <Text style={estilos.nombre}>
          Juan Beltrán
        </Text>

        <Text style={estilos.profesion}>
          Tecnólogo en Análisis y Desarrollo de Software
        </Text>

        <Text style={estilos.institucion}>
          SENA - CGMLTI
        </Text>
      </View>

      <View style={estilos.seccion}>
        <Text style={estilos.titulo}>
          Perfil Profesional
        </Text>

        <Text style={estilos.parrafo}>
          Aprendiz del SENA apasionado por el desarrollo
          de software y la tecnología. Con conocimientos
          en React, TypeScript, HTML, CSS, Python,
          bases de datos y desarrollo de aplicaciones
          web y móviles. Me caracterizo por mi
          responsabilidad, disposición para aprender
          y trabajo en equipo.
        </Text>
      </View>

      <View style={estilos.seccion}>
        <Text style={estilos.titulo}>
          Información Académica
        </Text>

        <Text style={estilos.parrafo}>
          Programa: Análisis y Desarrollo de Software
        </Text>

        <Text style={estilos.parrafo}>
          Institución: SENA
        </Text>

        <Text style={estilos.parrafo}>
          Centro: CGMLTI
        </Text>

        <Text style={estilos.parrafo}>
          Ficha: 3407181
        </Text>
      </View>

      <View style={estilos.seccion}>
        <Text style={estilos.titulo}>
          Contacto y Redes Sociales
        </Text>

        <MiBoton
          textoBoton="Enviar Correo"
          colorBoton="#2563EB"
          onPress={() =>
            Alert.alert(
              'Correo electrónico',
              'Agrega aquí tu correo personal'
            )
          }
        />

        <MiBoton
          textoBoton="Llamar"
          colorBoton="#16A34A"
          onPress={() =>
            Alert.alert(
              'Teléfono',
              'Agrega aquí tu número de contacto'
            )
          }
        />

        <MiBoton
          textoBoton="GitHub"
          colorBoton="#334155"
          onPress={() =>
            Alert.alert(
              'Mi GitHub',
              'https://github.com/juanbeltran9500-del'
            )
          }
        />

        <MiBoton
          textoBoton="LinkedIn"
          colorBoton="#0A66C2"
          onPress={() =>
            Alert.alert(
              'LinkedIn',
              'Agrega aquí tu perfil de LinkedIn'
            )
          }
        />

        <MiBoton
          textoBoton="Mis Proyectos"
          colorBoton="#7C3AED"
          onPress={() =>
            Alert.alert(
              'Repositorio del proyecto',
              'https://github.com/juanbeltran9500-del/HOJA_DE_VIDA_REACT'
            )
          }
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
    marginTop: 25,
    marginBottom: 25,
  },
  nombre: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#214D80',
    marginTop: 8,
  },
  profesion: {
    fontSize: 15,
    color: '#2563EB',
    textAlign: 'center',
    marginTop: 6,
    fontWeight: '600',
  },
  institucion: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 5,
  },
  seccion: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 12,
    marginBottom: 18,
    elevation: 3,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#214D80',
    marginBottom: 12,
  },
  parrafo: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 22,
    marginBottom: 8,
  },
});
