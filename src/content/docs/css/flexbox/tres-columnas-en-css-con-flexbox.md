---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ32EJ2B%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T181114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICNpYGgBVtPwp2G3qwXyHMJpkyjRxifmqL0LXj8FMJAPAiEA7mqenpeZ5mnlxiDeJkAdF0FD4R1UwovUnsi%2F2fYb2vEq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDKDw34SNwUJUCohNcircA1l%2BdXOefwZGiaiszQP63hHARLDWG8BqzZNAMNgVrfULPzu2bQIv4vkJV6e9vC29j0nu7QuDYjXbCZG7CXA6z5VsL5RXJr3jliIRflgyf7moLp1vCRGsg28crDcju%2BxHVrzdBhqbp2Jz96f2k75L1O2CGpEseAnYxE5OvYrnQ%2Bf4ISnsQO2v37oP%2B79NY1ccO4yK9wCTDLXSrW6LvFqQg1fHpGTm6vOGGx3MzV%2BG6lEmq2JxPryA5oACsxV%2BRTHn6RZ3okw7A6noKmBWkJbU6BzxSljNCXh4qVv%2FjGUa%2FShv8ZJGaJUaci91%2BgRRZ6jjmjZT0BneAdSTFDVK02hoKhf27yLpIIi6fzFhBRel%2FJc%2FtUBZ5f9Gv91%2Fg%2FwAziqCDA2MDCcz74YvRyjt9TR7jeIqwCL9sQFbxkrepMO0npG9cqE6bQwVtO%2FsqaRs5QAnwAS90TR9eC6erozH8ERpbYS324oYoVyq6EWcusnqFD3LCdFEJ7nvyPH1uizTvHcxW3T31W7BxqNkXY79v3UYAprIjxpXmPo%2FCO9s40eorhg0EwhgSSzG06lwtgH40UVj4R3vbXIGWR0ylcW%2BeY%2BVTfe7%2FKs%2FpOjiLYgc7FiiyEyip0HmgLcOSWmK800pMJ7uy8kGOqUB0a93BJ0jAXaBPtIiGnHV39XjuNgBOypRsJDQpXukOxQkafzSRv%2BlCqhSJF2KFJEBho1%2FxMN2zOG29l6L3se6X9z6GpsUrqtYOHGAWz%2BbzoTn643hjBchCEQLy%2FRaxDWDFPaCUkCjepUtMeta5QgyS7BLQWoR1xKj5huCHilONj4u54CeA5q%2BADEOK7cR%2FJdiKRXd3OlaLEje4gwcBbYw5jGfM%2FM0&X-Amz-Signature=6d403546bf29ff1f1bbebe1ee906a2ccd0a554ac9ccee7fc0fe1fc6bc693a478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ32EJ2B%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T181114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICNpYGgBVtPwp2G3qwXyHMJpkyjRxifmqL0LXj8FMJAPAiEA7mqenpeZ5mnlxiDeJkAdF0FD4R1UwovUnsi%2F2fYb2vEq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDKDw34SNwUJUCohNcircA1l%2BdXOefwZGiaiszQP63hHARLDWG8BqzZNAMNgVrfULPzu2bQIv4vkJV6e9vC29j0nu7QuDYjXbCZG7CXA6z5VsL5RXJr3jliIRflgyf7moLp1vCRGsg28crDcju%2BxHVrzdBhqbp2Jz96f2k75L1O2CGpEseAnYxE5OvYrnQ%2Bf4ISnsQO2v37oP%2B79NY1ccO4yK9wCTDLXSrW6LvFqQg1fHpGTm6vOGGx3MzV%2BG6lEmq2JxPryA5oACsxV%2BRTHn6RZ3okw7A6noKmBWkJbU6BzxSljNCXh4qVv%2FjGUa%2FShv8ZJGaJUaci91%2BgRRZ6jjmjZT0BneAdSTFDVK02hoKhf27yLpIIi6fzFhBRel%2FJc%2FtUBZ5f9Gv91%2Fg%2FwAziqCDA2MDCcz74YvRyjt9TR7jeIqwCL9sQFbxkrepMO0npG9cqE6bQwVtO%2FsqaRs5QAnwAS90TR9eC6erozH8ERpbYS324oYoVyq6EWcusnqFD3LCdFEJ7nvyPH1uizTvHcxW3T31W7BxqNkXY79v3UYAprIjxpXmPo%2FCO9s40eorhg0EwhgSSzG06lwtgH40UVj4R3vbXIGWR0ylcW%2BeY%2BVTfe7%2FKs%2FpOjiLYgc7FiiyEyip0HmgLcOSWmK800pMJ7uy8kGOqUB0a93BJ0jAXaBPtIiGnHV39XjuNgBOypRsJDQpXukOxQkafzSRv%2BlCqhSJF2KFJEBho1%2FxMN2zOG29l6L3se6X9z6GpsUrqtYOHGAWz%2BbzoTn643hjBchCEQLy%2FRaxDWDFPaCUkCjepUtMeta5QgyS7BLQWoR1xKj5huCHilONj4u54CeA5q%2BADEOK7cR%2FJdiKRXd3OlaLEje4gwcBbYw5jGfM%2FM0&X-Amz-Signature=6b1eb23c5c3813a5be37a34210e51da94d40c0cbbe68c0fd926a0de2c43f920e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

