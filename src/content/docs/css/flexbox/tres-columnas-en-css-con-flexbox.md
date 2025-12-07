---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656QO2MNC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T043045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEj5ASQAmJMYdtl0utA45FmNXvp%2BMspV0BqCCRSGXwYAAiEApoPwenK%2BowUziVbKrYcsoRgBsCHKSrPD9pQ9Ry%2F4aB8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB6fdzLI4ug7s1BvtircAxAuZchptTH0BCf%2FGk9xQf%2BJSZpnOQuSe1BSq46JpBvRGPGk4v32%2FK7e4j1PB%2FOXkhGl893BqsTGUHih2dk0NcKmcVCaLzuOuxLpQnkpLIcEQPJka%2BfXUA%2FBSfwDHdP9hHIZ4RXMOvGjs6znmZiQGqZwbnuFZtGpQPfiBO9iwhATk86QQcW1TpyfU9dB%2BnK2kkkqNnhksFRxB8VMI%2FDCNDBKaBl6ga8ifPrzDinWhvujYJ8oHu1g2LYbwArBISO2V1DFnFbcdKL2OjWPynB9JGsrN1%2FHvbKgtld1KLyDj4EenFSzwFg0igd7L363SN1r0ABi0%2Fild9ZoCafTz76bI6UaQ0BdLVK9vnSX1fxDLL4TChMkeU0i498v70CYUyuSS9oxvPk0vKe9%2B27ZXxXdZnbcD1j9EwYb80r35%2F1lKsYtZd3c1zHIgnF2dwIy4ddTrHCysE3O4%2BQOpkxfLF33KS1VloTyORznjY4bSvzpOAHQl575pyDVIRaDeiDCAdkDSLk7MGLTQMmNwoJSEUML7Jq7h5PR7O4Fon1zkLx110JJ2k%2BIhvFiQAKrAEwtw2m7KUh7BdfdSipqogYgBIN6oppbZks7NDfNS72n6wiQX4%2B9dVpb7MN0Ju7uYBmEMOj90skGOqUBR3p3W0bQWpVzvLKM%2FxtdlQx37Ea5MTBfNd6gpt2g8N4NWyd4ytscf7nRl8Tsb4suLCQ32mIvM8NRXpzD14ZtKMacqcB1Xg1LVwLz9Bp8J%2FHDJ7v6ekna6ciYbYnHmMgjnMGU43SN7itjT3XbAuPG8%2B0UjdPxgiTPAS6gM%2Bq0KR3lzE53Uy1BXJcEVPLhXER62r2RLtMyXOsNpl05NzXcvP%2Bxuasr&X-Amz-Signature=1308ac481e345b442615eac737a4b1041f619a5364cc5d1513561d75e9457ed7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656QO2MNC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T043045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEj5ASQAmJMYdtl0utA45FmNXvp%2BMspV0BqCCRSGXwYAAiEApoPwenK%2BowUziVbKrYcsoRgBsCHKSrPD9pQ9Ry%2F4aB8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB6fdzLI4ug7s1BvtircAxAuZchptTH0BCf%2FGk9xQf%2BJSZpnOQuSe1BSq46JpBvRGPGk4v32%2FK7e4j1PB%2FOXkhGl893BqsTGUHih2dk0NcKmcVCaLzuOuxLpQnkpLIcEQPJka%2BfXUA%2FBSfwDHdP9hHIZ4RXMOvGjs6znmZiQGqZwbnuFZtGpQPfiBO9iwhATk86QQcW1TpyfU9dB%2BnK2kkkqNnhksFRxB8VMI%2FDCNDBKaBl6ga8ifPrzDinWhvujYJ8oHu1g2LYbwArBISO2V1DFnFbcdKL2OjWPynB9JGsrN1%2FHvbKgtld1KLyDj4EenFSzwFg0igd7L363SN1r0ABi0%2Fild9ZoCafTz76bI6UaQ0BdLVK9vnSX1fxDLL4TChMkeU0i498v70CYUyuSS9oxvPk0vKe9%2B27ZXxXdZnbcD1j9EwYb80r35%2F1lKsYtZd3c1zHIgnF2dwIy4ddTrHCysE3O4%2BQOpkxfLF33KS1VloTyORznjY4bSvzpOAHQl575pyDVIRaDeiDCAdkDSLk7MGLTQMmNwoJSEUML7Jq7h5PR7O4Fon1zkLx110JJ2k%2BIhvFiQAKrAEwtw2m7KUh7BdfdSipqogYgBIN6oppbZks7NDfNS72n6wiQX4%2B9dVpb7MN0Ju7uYBmEMOj90skGOqUBR3p3W0bQWpVzvLKM%2FxtdlQx37Ea5MTBfNd6gpt2g8N4NWyd4ytscf7nRl8Tsb4suLCQ32mIvM8NRXpzD14ZtKMacqcB1Xg1LVwLz9Bp8J%2FHDJ7v6ekna6ciYbYnHmMgjnMGU43SN7itjT3XbAuPG8%2B0UjdPxgiTPAS6gM%2Bq0KR3lzE53Uy1BXJcEVPLhXER62r2RLtMyXOsNpl05NzXcvP%2Bxuasr&X-Amz-Signature=ef0c2ed291f3ae5f79e18f665b968f2e82cf9cbf8f92a4e0b56c318bd02e8470&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

