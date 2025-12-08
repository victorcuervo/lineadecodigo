---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMJEI5Q3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T074216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCivgylwvMg3YJ4sniJKMiAfrJVHEvxQuwo6ethy%2B5eMAIhAIslX6CwiRkltscaS5j4rs03aAUfkiligkNM4uQC4Q6LKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPr%2Fo%2BmEXC%2BTzj2Rgq3AM3FoCePG4fSdfIp3VOEkxyK9lKBsBVhtvxTsXm%2Frucjapau8GT3BP8tX8Mly3SF%2FIa6fwEaVvOkOGXk%2FcTtmMDjc9qa5pdug30cy0dM%2B0eciHxUCVW1RRNSDvQHSWMUKialcLKz73YbZ3DC4ku4nz9Qe8kksHfVKWXotfRqdRnofmo%2Fu3XYlc1B0zEj87GQF5y6yf6brOQ9RJqM9FDPHukjegaahveIFnJK78k2erttEXRl9nP2toUt6qaQCeDfZoPhXRLeGOZE42dCT1u6F2HrFfui0ObMlez6w5J9XG63uNPQFF1kGxlqx9SQV5evR7Uq%2BI5LnpcQhjqoZMu3bJAw%2FIMqFJlCZN2PnZ3kEgSObHDiUrlGt%2BzLycVIDN6dCecyR5n72u%2FNJfDng1yZtyheake5ZwMshDVOmTgHpe2mP2f230EMddjTc4CVYnFhTFeMdkyvj5bibh8tDOSyEmX1cXQqczVsLga7INkUUuzrqJ3vs%2FAFHtN53DWuT5efPF5st%2FU%2FQpQ5tFWzRKKmrvDQ6NhXUJ7mNKGA7G5iasUzjzCupVInT44Iu4G1fN1wIyKsKKpeI7guf0wv1TL2mGzmZwzsXQ1iuA%2FnJ2zTow6tuniNqlNAtEm%2BrQbWDCh7dnJBjqkATk8zzuB50SEsPv38ZukM7nVbI7VyMYnzcMs%2F8%2FR3VsbueBi8MeTxUBvHVYZOHGIa0LqgBvn%2BHDsngJf34IEyeUc9yecpP3id7Q4TpPNB6UmTqW%2Fe%2FsUz9ni5NBC4ZN3DtfY0FZANZqRHca6lOY%2Br6Lcin9jbWG1nhs4Pxhm3sFtyJpF5KlpLu4Q%2FQBSuMxRYlnawUfwNr7bJJ5rBEZ8d7t7oOFm&X-Amz-Signature=24c379d4a3e0fea6a2274b08d4994b02e7b3870c15d353014926ac84a3eaab1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMJEI5Q3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T074216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCivgylwvMg3YJ4sniJKMiAfrJVHEvxQuwo6ethy%2B5eMAIhAIslX6CwiRkltscaS5j4rs03aAUfkiligkNM4uQC4Q6LKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPr%2Fo%2BmEXC%2BTzj2Rgq3AM3FoCePG4fSdfIp3VOEkxyK9lKBsBVhtvxTsXm%2Frucjapau8GT3BP8tX8Mly3SF%2FIa6fwEaVvOkOGXk%2FcTtmMDjc9qa5pdug30cy0dM%2B0eciHxUCVW1RRNSDvQHSWMUKialcLKz73YbZ3DC4ku4nz9Qe8kksHfVKWXotfRqdRnofmo%2Fu3XYlc1B0zEj87GQF5y6yf6brOQ9RJqM9FDPHukjegaahveIFnJK78k2erttEXRl9nP2toUt6qaQCeDfZoPhXRLeGOZE42dCT1u6F2HrFfui0ObMlez6w5J9XG63uNPQFF1kGxlqx9SQV5evR7Uq%2BI5LnpcQhjqoZMu3bJAw%2FIMqFJlCZN2PnZ3kEgSObHDiUrlGt%2BzLycVIDN6dCecyR5n72u%2FNJfDng1yZtyheake5ZwMshDVOmTgHpe2mP2f230EMddjTc4CVYnFhTFeMdkyvj5bibh8tDOSyEmX1cXQqczVsLga7INkUUuzrqJ3vs%2FAFHtN53DWuT5efPF5st%2FU%2FQpQ5tFWzRKKmrvDQ6NhXUJ7mNKGA7G5iasUzjzCupVInT44Iu4G1fN1wIyKsKKpeI7guf0wv1TL2mGzmZwzsXQ1iuA%2FnJ2zTow6tuniNqlNAtEm%2BrQbWDCh7dnJBjqkATk8zzuB50SEsPv38ZukM7nVbI7VyMYnzcMs%2F8%2FR3VsbueBi8MeTxUBvHVYZOHGIa0LqgBvn%2BHDsngJf34IEyeUc9yecpP3id7Q4TpPNB6UmTqW%2Fe%2FsUz9ni5NBC4ZN3DtfY0FZANZqRHca6lOY%2Br6Lcin9jbWG1nhs4Pxhm3sFtyJpF5KlpLu4Q%2FQBSuMxRYlnawUfwNr7bJJ5rBEZ8d7t7oOFm&X-Amz-Signature=5cd1c972365b8b2940981731c20ad4de2c53dc4f6deb607285c0ddfebc4f060c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

