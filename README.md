# Visor de Personajes - Rick and Morty API

Este proyecto es una aplicación web sencilla que consume datos dinámicos de una API pública. Muestra una galería de personajes de la serie "Rick and Morty" utilizando HTML, CSS y JavaScript (Fetch API).

##  Enlace a la Demo
Puedes probar la aplicación funcionando aquí:
[https://github.com/Miguel-307/API-JS.git]

---

## Documentación de la API

A continuación se detallan las características de la API seleccionada para esta práctica.

**1. API Seleccionada**
* **Nombre:** The Rick and Morty API
* **URL de la documentación:** https://rickandmortyapi.com/documentation

**2. ¿Qué tipo de datos ofrece?**
La API devuelve datos en formato JSON sobre el universo de la serie. Específicamente, este proyecto utiliza el endpoint de **Personajes (Characters)**, que proporciona:
* Imágenes de los personajes.
* Nombres.
* Estado (Vivo/Muerto/Desconocido).
* Especie y género.
* Origen y ubicación actual.

**3. ¿Es necesario obtener una clave de API (API Key)?**
No. Esta API es totalmente pública y gratuita (open source), por lo que no requiere autenticación ni tokens para realizar peticiones `GET`.

**4. ¿Cómo se estructura una solicitud a la API?**
* **URL Base:** `https://rickandmortyapi.com/api/`
* **Método HTTP:** `GET`
* **Parámetros:** Se pueden pasar parámetros en la URL para filtrar (por página, nombre, estado, etc.).

**5. Ejemplo de una consulta**
Para obtener todos los personajes que se llamen "Rick" y estén vivos:
`https://rickandmortyapi.com/api/character/?name=rick&status=alive`

---

## Tecnologías Utilizadas

* **HTML5:** Estructura semántica de la página.
* **CSS3:** Diseño responsivo utilizando **CSS Grid** y Flexbox.
* **JavaScript:** Manipulación del DOM y consumo de API mediante `fetch` y `async/await`.

---

## Problemas encontrados y soluciones

Durante el desarrollo encontré los siguientes desafíos:

1.  **Problema:** Al cargar las imágenes, algunas tardaban en aparecer y el diseño se movía.
    * **Solución:** Definí tamaños fijos en el CSS para las tarjetas y usé un contenedor `grid` para mantener el orden aunque el contenido cargue después.

2.  **Problema:** Entender la estructura del JSON devuelto.
    * **Solución:** Utilicé `console.log(data)` para inspeccionar el objeto y descubrí que la lista de personajes estaba dentro de la propiedad `results`, no en la raíz.

---

## 👤 Autor
Miguel Millán Luque