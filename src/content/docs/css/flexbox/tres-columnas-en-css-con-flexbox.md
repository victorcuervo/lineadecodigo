---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4N4MURL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T052926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5ThysqeCSIZiK5x6juumYgMhD5sN861KdhC%2BgRRQ23AIhAJZu5gSzeuA1bdR%2B%2Fem7pLzUAsyNBRhcCT0Pyyhgf8keKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BlMu4MRWv34r%2BkLAq3AOLEuFd46N7sZj2JMUYZmBcIlc6K7ikSItWEZl3aWIGjc0xG9U7TC4140%2BvuW9MkwMDfL37gbo2CeQltRAvP87Tq9%2BM6WlXJ4N2hKIyjuUu2gA82lXF%2FxNsMHiebfXQ%2FNvsHfLrfrPDDtfgkAG1bSx0XWAPegGMFedoOvCztrCFtiFbOzy3oW7qjM1Yt%2BZFRkc0xGICtoVPfA%2BnrZ1TYem32prWSdS2nPKnrdoJtJguV0hetxeJR0uDapfhdc4e%2FI48HtoeG97PjuJPzt5mY8tY5zKZuzGBCppyHiKgN%2BhoeDU6rUrc7dXBKmbab6EPgtklDQGogMx0asjqLy3SMPXe4RJVEXK%2FU3aGbFRv8XtPgRGv1B6G7aqEyuf00VojqiqxIAPtVjMlTZh1LrrCQMf2GY%2BjbkMHYG6D888dFOh0u3P1fLaRx0jplfaKTnYeOuk6%2B9HBtHflGcC%2BZhARgGkmz6K%2F8QUqo04Ow9EjBn%2BNosOGuDCfvFPNIL2grXvTajWuj40aXilycVIIpcHZHaCvuZC3Lt5E0bHAubTCaW31BbzVsaN3k2V71LI2ML1HBKbBoduKCH0u1cXwM9T4QYIysM3sStKpBpiW9nmOIchmTHrl3q1fHp35mTddvTDYtNnJBjqkAY64HAdD3GZjcdF5nH%2Bx1v1yrNjAj%2FyGNqeuA%2F7CqRCzSfyB8ZBhJgXErkHM0fcoX8Fh5zr31r%2BNVYUyIp9Xjy1vR0X5ow2%2Fwav14Vhi01ZPwwMJ%2BlHbS7BqK1LLyFtuAiUIxRjNlrhN%2BnTFGc%2Bk3fQNh9QMdx%2FnD%2BSrkW0yM7r74uMtYqt0jRxs4inzdTAocAZVOG6oohltzuNnrC%2BpCxjIY%2F7x&X-Amz-Signature=671d1cbac0d3f0474660cb8f5a3e8371dd2394a57dc43cf335c051a3d8aaaf80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4N4MURL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T052926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5ThysqeCSIZiK5x6juumYgMhD5sN861KdhC%2BgRRQ23AIhAJZu5gSzeuA1bdR%2B%2Fem7pLzUAsyNBRhcCT0Pyyhgf8keKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BlMu4MRWv34r%2BkLAq3AOLEuFd46N7sZj2JMUYZmBcIlc6K7ikSItWEZl3aWIGjc0xG9U7TC4140%2BvuW9MkwMDfL37gbo2CeQltRAvP87Tq9%2BM6WlXJ4N2hKIyjuUu2gA82lXF%2FxNsMHiebfXQ%2FNvsHfLrfrPDDtfgkAG1bSx0XWAPegGMFedoOvCztrCFtiFbOzy3oW7qjM1Yt%2BZFRkc0xGICtoVPfA%2BnrZ1TYem32prWSdS2nPKnrdoJtJguV0hetxeJR0uDapfhdc4e%2FI48HtoeG97PjuJPzt5mY8tY5zKZuzGBCppyHiKgN%2BhoeDU6rUrc7dXBKmbab6EPgtklDQGogMx0asjqLy3SMPXe4RJVEXK%2FU3aGbFRv8XtPgRGv1B6G7aqEyuf00VojqiqxIAPtVjMlTZh1LrrCQMf2GY%2BjbkMHYG6D888dFOh0u3P1fLaRx0jplfaKTnYeOuk6%2B9HBtHflGcC%2BZhARgGkmz6K%2F8QUqo04Ow9EjBn%2BNosOGuDCfvFPNIL2grXvTajWuj40aXilycVIIpcHZHaCvuZC3Lt5E0bHAubTCaW31BbzVsaN3k2V71LI2ML1HBKbBoduKCH0u1cXwM9T4QYIysM3sStKpBpiW9nmOIchmTHrl3q1fHp35mTddvTDYtNnJBjqkAY64HAdD3GZjcdF5nH%2Bx1v1yrNjAj%2FyGNqeuA%2F7CqRCzSfyB8ZBhJgXErkHM0fcoX8Fh5zr31r%2BNVYUyIp9Xjy1vR0X5ow2%2Fwav14Vhi01ZPwwMJ%2BlHbS7BqK1LLyFtuAiUIxRjNlrhN%2BnTFGc%2Bk3fQNh9QMdx%2FnD%2BSrkW0yM7r74uMtYqt0jRxs4inzdTAocAZVOG6oohltzuNnrC%2BpCxjIY%2F7x&X-Amz-Signature=ffe1f96cef92ad8973a220538461f40f51d8a72261d920806137f91a29051f59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

