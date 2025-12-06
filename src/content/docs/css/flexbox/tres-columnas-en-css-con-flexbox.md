---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB77H5W5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T123202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwmPKqm8sUKxK9070ApAcmaIEEX64OhmlVSxMLlTataAiEAz2CsPSRMLjuzykoIVFadMOihpbS1qYZS8KG708Pp6wsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEbnlwOtVbCIaiNHWircA%2Fx6po4WuAIvGbdnpEHGnDfhl9f1Vuj%2Bh7p1RTIMSLbmtL4Bt4PKN3YrICwSWzHrwF5WhdX0bkzK6yZ2hdxw7%2Fm1n54Jo1k9WKXjzHD7o2nZBi0OAkN9QylSQu42wXyNYNmVunPgONQIizWt3%2FIM9kl10%2BajLp8%2BjChTq7k1XsFrLJjiEzflRl9Y306mwylusD1sYJjJfL81nvSUPb7GGmIIn9qyXvsPvwHHVvQJXUbA8dvRzMc5f9WTO831l65c40N1na7hdg%2BE0jEWTq13pkSRmloakp8acXEszxIqRuzSARxtEe5Hl7eBrhOAF%2FSE4rdVTYXzWLC1KG1w%2BcYlu7Tf283viPqZwQ5mUBGegpYGBz18hxdpep4v6r6k5Dtp2n1hZyKCJSHTpPT3gl9reZP9EfcvSC3TKfwnO9keHTgn4AASYsfjBlc9OJDTKvta2fSLESWsJr4w4IFXqzeHT0w4AeVf1hd4fzVyxM600C0XRX3K%2FqFQmZf0Tmx%2FnOkKK5gRu7MjNw4s%2B%2BilJeWS1Qz%2FxdLBlQi%2ByggVPOvyg9bQ%2B%2F%2Ftzm2MfTz00JV%2FrfmhycW8c9xHthHxn5kSeU3ycI5xizIBHRPfI%2FFA0%2FmMITDnygzRrj4JkWLrWAfvMMmm0MkGOqUBjjrAKc62YL42z1KOSf2%2BsROHmP%2FxXF5C2kc8%2FmDYaU33inRsORDQIZinKU2QVot7onvscHGjNAHP4BVM4nKBfcvUz0jfIJ7Z8aT3zXEEaX3Pui5zuMB15zZz5%2Fjs2Z3w4%2Fa8MrsujXLl%2FUIqCAZDK%2F%2FAibG8ijPVFJqD6bpO7Ly7PByGc%2FUB%2Fd56A2hYlnbaI8JD6tBIXSRnvnku%2FB3xttBa8VpV&X-Amz-Signature=49399aa8199fa5ab35d201a7b5b55a605dfb9c4494adaf70bdf0e466b54c8a33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB77H5W5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T123202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwmPKqm8sUKxK9070ApAcmaIEEX64OhmlVSxMLlTataAiEAz2CsPSRMLjuzykoIVFadMOihpbS1qYZS8KG708Pp6wsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEbnlwOtVbCIaiNHWircA%2Fx6po4WuAIvGbdnpEHGnDfhl9f1Vuj%2Bh7p1RTIMSLbmtL4Bt4PKN3YrICwSWzHrwF5WhdX0bkzK6yZ2hdxw7%2Fm1n54Jo1k9WKXjzHD7o2nZBi0OAkN9QylSQu42wXyNYNmVunPgONQIizWt3%2FIM9kl10%2BajLp8%2BjChTq7k1XsFrLJjiEzflRl9Y306mwylusD1sYJjJfL81nvSUPb7GGmIIn9qyXvsPvwHHVvQJXUbA8dvRzMc5f9WTO831l65c40N1na7hdg%2BE0jEWTq13pkSRmloakp8acXEszxIqRuzSARxtEe5Hl7eBrhOAF%2FSE4rdVTYXzWLC1KG1w%2BcYlu7Tf283viPqZwQ5mUBGegpYGBz18hxdpep4v6r6k5Dtp2n1hZyKCJSHTpPT3gl9reZP9EfcvSC3TKfwnO9keHTgn4AASYsfjBlc9OJDTKvta2fSLESWsJr4w4IFXqzeHT0w4AeVf1hd4fzVyxM600C0XRX3K%2FqFQmZf0Tmx%2FnOkKK5gRu7MjNw4s%2B%2BilJeWS1Qz%2FxdLBlQi%2ByggVPOvyg9bQ%2B%2F%2Ftzm2MfTz00JV%2FrfmhycW8c9xHthHxn5kSeU3ycI5xizIBHRPfI%2FFA0%2FmMITDnygzRrj4JkWLrWAfvMMmm0MkGOqUBjjrAKc62YL42z1KOSf2%2BsROHmP%2FxXF5C2kc8%2FmDYaU33inRsORDQIZinKU2QVot7onvscHGjNAHP4BVM4nKBfcvUz0jfIJ7Z8aT3zXEEaX3Pui5zuMB15zZz5%2Fjs2Z3w4%2Fa8MrsujXLl%2FUIqCAZDK%2F%2FAibG8ijPVFJqD6bpO7Ly7PByGc%2FUB%2Fd56A2hYlnbaI8JD6tBIXSRnvnku%2FB3xttBa8VpV&X-Amz-Signature=0441cc60f14ad9b9c540d2f574f39b925db9a2199eebf8b987b7a576f29740f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

