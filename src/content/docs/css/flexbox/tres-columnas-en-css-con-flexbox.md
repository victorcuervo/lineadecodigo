---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676LPAKMX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T210339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDctl2O4NyKWEhsGhO2zd6w8TuthU7%2BV%2F0N8V3Gkb6QbAIgPnUPQRC62fEsAD7LJRefG4KJ1JLYGzSnWDFT1POey%2FQqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfcNdb6fJeR%2B%2F1zFCrcA5mQnuUV5AgQL7PvgCJ0UJDfxZj782IDBuozqEfkmv3A5QRsTffjLaWbDSN%2BGrHOfu2In2XHVj1ygLYJz0UhoiMZFE%2FOhBsHST2D%2Bg2gasAI68LrMMaQEAenIfEw5Jwv2qrs8sEB6sER3IpVb8jSLOYlAEIxmC%2BY3v5NXc%2Bd%2Fv83uocAF2sVdJEmRX%2BMy8xCFESHHZQN1Oy72r7TuyCjS%2BDxMGuxnb1MWUuQk%2Fk%2B6JpRp4xSlVePHa76PFofgdppQVjb65qM7PP0emei58YAImsxbUGcZGbRCEw3EcMfb1eeBmglID79GciuqvL13rk3sj8xZFV6kXAvDyNy4RokIRc6Wim3KNh2VJW%2BEvcrhpaZqFPv%2B%2F5TlVr4kZ8oo%2FbPZ7c0ZbmzWDG5LNPpXwbrVhZ1kYJFqGwQTIpAgOIHS1xloP7KDkNLoObj0loaGzKSv3aHg4Co65J1gZPRg%2BVysHZKG%2BFXm3UQaImIr%2F6sOdHQnmhWPQ6LU6ErKgsfXBuS1ETObq02LSOkPomwDk4XbO%2FmL9t%2FZfbN40ibyQJyG%2B95x5MNreysdC%2BbdH3uVSZRL9O%2Bmn52wW7ewP8dRxUqy8u0JXwwEFIkkKUODoWMJ57bqoTAs9YssPKGriCyML%2FH18kGOqUBI9kp6mm08Sn6krOOKspvw%2BNMWD4U6DD%2F8M3ZoQXf%2BwmWzIRKp6UOwbW%2BvHDNxsPbdlHHv66HLnRWgFfo0yWIDq3njWZb5axkRLMBAyZv643HAwTBytgBg%2FhPwoUdftJZGDf4mBvCQ7EnZnCln06YokdBd%2BoPSSYMT56Xr0fTE0LjUrxNdNjc6j4g3eIJ9oRtekJSrq02%2BKDivy8OcnV3Po%2Br%2Biz9&X-Amz-Signature=8c7502f1c849403889b7df4c3c7c0f91e31e7de82bf3ba4c23908a9a8a7c03d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676LPAKMX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T210339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDctl2O4NyKWEhsGhO2zd6w8TuthU7%2BV%2F0N8V3Gkb6QbAIgPnUPQRC62fEsAD7LJRefG4KJ1JLYGzSnWDFT1POey%2FQqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfcNdb6fJeR%2B%2F1zFCrcA5mQnuUV5AgQL7PvgCJ0UJDfxZj782IDBuozqEfkmv3A5QRsTffjLaWbDSN%2BGrHOfu2In2XHVj1ygLYJz0UhoiMZFE%2FOhBsHST2D%2Bg2gasAI68LrMMaQEAenIfEw5Jwv2qrs8sEB6sER3IpVb8jSLOYlAEIxmC%2BY3v5NXc%2Bd%2Fv83uocAF2sVdJEmRX%2BMy8xCFESHHZQN1Oy72r7TuyCjS%2BDxMGuxnb1MWUuQk%2Fk%2B6JpRp4xSlVePHa76PFofgdppQVjb65qM7PP0emei58YAImsxbUGcZGbRCEw3EcMfb1eeBmglID79GciuqvL13rk3sj8xZFV6kXAvDyNy4RokIRc6Wim3KNh2VJW%2BEvcrhpaZqFPv%2B%2F5TlVr4kZ8oo%2FbPZ7c0ZbmzWDG5LNPpXwbrVhZ1kYJFqGwQTIpAgOIHS1xloP7KDkNLoObj0loaGzKSv3aHg4Co65J1gZPRg%2BVysHZKG%2BFXm3UQaImIr%2F6sOdHQnmhWPQ6LU6ErKgsfXBuS1ETObq02LSOkPomwDk4XbO%2FmL9t%2FZfbN40ibyQJyG%2B95x5MNreysdC%2BbdH3uVSZRL9O%2Bmn52wW7ewP8dRxUqy8u0JXwwEFIkkKUODoWMJ57bqoTAs9YssPKGriCyML%2FH18kGOqUBI9kp6mm08Sn6krOOKspvw%2BNMWD4U6DD%2F8M3ZoQXf%2BwmWzIRKp6UOwbW%2BvHDNxsPbdlHHv66HLnRWgFfo0yWIDq3njWZb5axkRLMBAyZv643HAwTBytgBg%2FhPwoUdftJZGDf4mBvCQ7EnZnCln06YokdBd%2BoPSSYMT56Xr0fTE0LjUrxNdNjc6j4g3eIJ9oRtekJSrq02%2BKDivy8OcnV3Po%2Br%2Biz9&X-Amz-Signature=58df6ef5e86de0fa6b0a556cf555af3785ea5f9cdfcac37c43e33e97cdcf2398&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

