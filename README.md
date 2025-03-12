# 🌟 N5 Microfrontends Challenge

## 🏗️ Arquitectura del Proyecto
El proyecto está compuesto por **cuatro repositorios independientes** que se integran mediante una arquitectura de **Microfrontends**. Cada repositorio está desarrollado con **React**, **Vite**, **Tailwind CSS** y **Styled Components** utilizando la metodología **BEM**, siguiendo los principios **SOLID** para garantizar un código limpio, escalable y de alta calidad.

- **n5-host**: Orquesta la integración de los microfrontends y gestiona funcionalidades globales como el cambio de idioma (inglés / español).
- **n5-commons**: Contiene componentes y estilos compartidos, con pruebas unitarias para asegurar su correcto funcionamiento.
- **n5-harry-potter**: Microfrontend que consume la API de **Harry Potter** y muestra los personajes.
- **n5-rick-morty**: Microfrontend que consume la API de **Rick and Morty** y muestra los personajes.

## 🌍 Despliegue
Cada repositorio se despliega de forma independiente en **Vercel**. Puedes acceder a ellos mediante los siguientes enlaces:
- 🔗 **n5-host**: [https://n5-host.vercel.app/](https://n5-host.vercel.app/)
- 🔗 **n5-harry-potter**: [https://n5-harry-potter.vercel.app/](https://n5-harry-potter.vercel.app/)
- 🔗 **n5-rick-morty**: [https://n5-rick-morty.vercel.app/](https://n5-rick-morty.vercel.app/)
- 🔗 **n5-commons**: [https://n5-commons.vercel.app/](https://n5-commons.vercel.app/)

## 🛠️ Instalación y Ejecución
Para ejecutar cada proyecto en local, sigue estos pasos:

1. 📥 **Clonar el repositorio** (ejemplo para n5-host):
   ```sh
   git clone https://github.com/Japods/n5-host.git
   cd n5-host
   npm install

2. 📥 **Iniciar el servidor en modo desarrollo:**
   ```sh
   npm run dev

3. 🧪 **Ejecutar los tests**:
   ```sh
   npm run test

Repite estos pasos para cada uno de los repositorios: n5-harry-potter, n5-rick-morty y n5-commons.
Cada microfrontend se ejecuta en puertos específicos (por ejemplo, 5002, 5003, 5004, 5005) para evitar conflictos.


## 🛠️ Funcionalidades Principales

- 🖥️ Microfrontends Independientes: Cada sección de la aplicación se desarrolla y despliega de forma autónoma.
- 🌐 Cambio de Idioma: Soporte para inglés y español, gestionado globalmente en el proyecto host.
- 🖼️ Visualización de Personajes: Listados que muestran el nombre e imagen de los personajes consumidos desde APIs públicas.
- 🔄 Reutilización de Componentes: Uso de un repositorio común (n5-commons) para compartir componentes y estilos.
- 🧪 Pruebas Unitarias: Implementadas con Vitest para garantizar la robustez de los componentes y la integración de los microfrontends.
- ⚙️ Estilos Modulares con BEM: Asegurando consistencia y escalabilidad en la UI mediante Styled Components y la metodología BEM.

## 📂 Estructura de Repositorios

## n5-host
- **Repositorio:** [n5-host](https://github.com/tu-repositorio/n5-host) *(enlace de ejemplo)*
- **Despliegue:** [https://n5-host.vercel.app/](https://n5-host.vercel.app/)
- **Propósito:** Orquestar e integrar los microfrontends, gestionar el cambio de idioma y realizar pruebas de renderizado.
- Contiene la aplicación principal que orquesta y muestra los microfrontends. Incluye cambio de idioma (ES/EN) y pruebas unitarias relacionadas con la renderización de microfrontends.

## n5-commons
- **Repositorio:** [n5-commons](https://github.com/tu-repositorio/n5-commons) *(enlace de ejemplo)*
- **Despliegue:** [https://n5-commons.vercel.app/](https://n5-commons.vercel.app/)
- **Propósito:** Contener componentes compartidos y estilos que se reutilizan en todos los microfrontends.
- Biblioteca de componentes compartidos (layout, botones, etc.). Incluye pruebas unitarias de dichos componentes.

## n5-harry-potter
- **Repositorio:** [n5-harry-potter](https://github.com/tu-repositorio/n5-harry-potter) *(enlace de ejemplo)*
- **Despliegue:** [https://n5-harry-potter.vercel.app/](https://n5-harry-potter.vercel.app/)
- **Propósito:** Mostrar personajes de Harry Potter consumiendo la API de Potter DB.
- Microfrontend que consume la API de Harry Potter para mostrar personajes. Contiene hooks, store, componentes específicos y estilos BEM.

## n5-rick-morty
- **Repositorio:** [n5-rick-morty](https://github.com/tu-repositorio/n5-rick-morty) *(enlace de ejemplo)*
- **Despliegue:** [https://n5-rick-morty.vercel.app/](https://n5-rick-morty.vercel.app/)
- **Propósito:** Mostrar personajes de Rick and Morty consumiendo la API correspondiente.
- Microfrontend que consume la API de Rick and Morty para mostrar personajes. Contiene hooks, store, componentes específicos y estilos BEM.

   

## ✅ Principios SOLID & Metodología BEM

	•	SOLID:
	•	Single Responsibility: Cada componente y módulo tiene una única responsabilidad.
	•	Open/Closed: Los componentes se pueden extender sin modificar su estructura base.
	•	Liskov Substitution: Los componentes intercambiables cumplen los mismos contratos.
	•	Interface Segregation: Interfaces y hooks segmentados según funcionalidad específica.
	•	Dependency Inversion: Uso de abstracciones para inyectar dependencias y facilitar pruebas.
	•	BEM + Styled Components:
	•	Organización consistente de clases (.block__element--modifier).
	•	Estilos aislados y modulares que facilitan la escalabilidad y el mantenimiento de la UI.

## 🔗 APIs Utilizadas

Rick and Morty API

Endpoint base: https://rickandmortyapi.com/api

Harry Potter API (Potter DB)

Endpoint base: https://api.potterdb.com/v1

Cada microfrontend se encarga de consumir la API correspondiente, procesar la información y renderizarla de forma adecuada.

## Pruebas Unitarias

🔬 Pruebas Unitarias

	•	n5-commons: Se testean los componentes compartidos para asegurar que funcionen correctamente en cualquier microfrontend.

	•	n5-host: Contiene pruebas enfocadas en la correcta renderización de los microfrontends y el cambio de idioma.

	•	n5-rick-morty y n5-harry-potter: Pueden incluir pruebas de hooks, stores o componentes.


Las pruebas se realizan con Vitest, un runner de pruebas rápido y sencillo de configurar con Vite.

## ⚙️ Scripts Disponibles

n5-host && n5-commons

```sh
 "scripts": {
  "dev": "vite --port 5005 --strictPort",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview",
  "serve": "vite preview --port 5005 --strictPort",
  "start": "npm run build && npm run serve",
  "test": "vitest",
  "test:watch": "vitest --watch"
}
```

n5-rick-morty && n5-harry-potter

```sh
"scripts": {
  "dev": "vite --port 5003 --strictPort",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview",
  "serve": "vite preview --port 5003 --strictPort",
  "start": "npm run build && npm run serve"
}
```

# Respuestas a Preguntas Técnicas

1. **¿Qué es la accesibilidad y cómo se logra?**  
   
   La Accesibilidad es la facilidad que tiene un software o dispositivo tecnologico de Usarse en todos los aspectos, tomando en cuenta cualquier tipo de persona ya sea Niños, personas con discapacidad, etc. Todo esto se logra tomando en cuenta Identificando las barreras de tu aplicacion con pruebas en usuarios reales, Usando atributos AIRA cuando sea necesario, Estructurar el contenido con HTML semantico, y Garantizar una buena UX UI para mejorar la experiencia del usuario.

2. **¿Cuál es la diferencia entre session storage, local storage y cookies?**  

 Session Storage: Almacena datos solo para la sesión actual del navegador. Todos los datos abiertos se eliminarán una vez que se cierre la pestaña o el navegador.

Local Storage: Permite que los datos se mantengan en el navegador por un período prolongado. A diferencia del session storage, los datos pueden conservarse incluso después de cerrar el navegador hasta que se realice una solicitud explícita para borrarlos.

Cookies: Una cookie es un pequeño fragmento de información que el navegador retiene y puede enviarse junto con cada solicitud al servidor. Una cookie puede tener una vida útil y puede usarse para identificar la sesión o hacer un seguimiento de la información del usuario.

3. **Explica el event loop de JavaScript (y cómo funcionan las promesas o async/await en JS).**  
   JavaScript usa un modelo de ejecución que se basa en un solo hilo, lo que significa que sólo puede hacer una cosa a la vez. El event loop es el encargado de gestionar la cola de tareas: primero se ejecuta el código principal, y luego se van atendiendo las tareas asíncronas (como llamadas a APIs o timers) cuando la pila de ejecución está libre. Las promesas y async/await son formas de manejar operaciones asíncronas de manera más organizada, permitiendo escribir código que parece secuencial, pero que en realidad se ejecuta de forma asíncrona cuando los datos están listos.

4. **Si se están haciendo demasiadas llamadas a la API desde tus hooks, ¿qué puedes hacer para prevenirlo?**  
   Una solución es implementar técnicas de control de llamadas como el "debounce" o "throttle", que ayudan a limitar la frecuencia de las peticiones. También se puede revisar la lógica para evitar solicitudes innecesarias, por ejemplo, asegurándose de que las llamadas se hagan solo cuando realmente se necesiten.

5. **¿Cómo gestionas el estado global y por qué de esa forma?**  
   Una manera común es usar soluciones como la API de Context de React o librerías como Redux. Esto permite centralizar y compartir datos entre diferentes componentes de manera predecible, facilitando el mantenimiento y la escalabilidad de la aplicación. Se elige esta forma para evitar la duplicación de estados y simplificar la comunicación entre componentes.

6. **¿Qué es el progressive rendering?**  
   El progressive rendering es una técnica que mejora la experiencia del usuario al mostrar partes de la interfaz tan pronto como estén listas, en lugar de esperar a que todo el contenido se cargue. Esto hace que la aplicación parezca más rápida y receptiva, ya que el usuario puede interactuar con la parte visible mientras el resto se va completando.