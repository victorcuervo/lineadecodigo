---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BZM2O4H%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T094054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNchtkeAWUt9JqlDyJfjyn4ORhIFEbcbZdsebY98xLaQIgC4pEZW%2Fvnb6MARADoYU8IhoHisCrQzhIqAILS5uy6Jsq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDAPsHmlYop2eD%2BO08CrcA1ZVeT8nySkzo96989f5FOGeIfeXYHWfosw7F1Icwfh0Un1ZioqUfH1fJiaguXpi289UaPCmKp1saprC2QhCiNfImaOiqdxv%2F4LcnCzCGkLT4ho1mN6e9FZhvv5KUUhozzPHSCIzO%2FNCUqWr2DW6%2FGXFieIP%2FDtvpU1zIrx1PCN3SaE3EX29B5B3yZfZgMDsQtPvT8MQEjqgEJmz7o1fKpYH7v1SvAGBXkCgrhZqHAXVLGyBptI0GighdglOARpKtslfwvWz3Czh0lvTWTrE6ToN9RSX9tREOyWURajK7TRxfm0OoW%2BpXR18uj%2BpulVxHD%2BhypXVAYRgW4Q2ZyA6oNOFuL9hxQCucshfkS5hXnOX3wtm%2Fe1Hl9ynt06x0uRF0Cx32gWizAQzDmIsSw9wLGcY%2BG9MxKR8cBBIIuC80cw6%2FHopq2gDws%2BMW8s%2FoD87D%2BxAxykXPTFb2KFwDMqBVPp4IWm%2FLoTLBf8q7yTb8iJ7NrTURrxi3UC3sbzMT%2BpxdsxnuMRkxvmbbd5xw9N6VIQkSsc%2FlWezjiErxGIk%2BJLC%2BZD040PiJqrq98Em67BJJjch5MVwRP400l1nv8p7D1%2B22RAW2eeWzfNJ1EZeVOxEi1MxJCkAqyiktsy0MPXrz8kGOqUB%2B6YytvmBLf9VjEsa0nhBGzkKSAYtXJhbajpPBATK0zR7nfeIaxpGvEv0QxJYMf9FJsPoFRSn6KKY1Q1udAhlENF9XByYGpHlL%2B%2BoMull%2BB6MtT%2B4MOqZTXbFEiiRNkdfm%2Bb6L1%2BeQ7wtiVjt3SiUvOyZcCHOM6CIwIa3sAHiQt5DGNzYbd1Hklg340r0k77PEPqzDKm5G9Jew3rVdGwcSsC5FPqV&X-Amz-Signature=3b453d6be75672d4829fc01bb187eaada36bf40ac9504fbcc9231f4641854a87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BZM2O4H%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T094054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNchtkeAWUt9JqlDyJfjyn4ORhIFEbcbZdsebY98xLaQIgC4pEZW%2Fvnb6MARADoYU8IhoHisCrQzhIqAILS5uy6Jsq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDAPsHmlYop2eD%2BO08CrcA1ZVeT8nySkzo96989f5FOGeIfeXYHWfosw7F1Icwfh0Un1ZioqUfH1fJiaguXpi289UaPCmKp1saprC2QhCiNfImaOiqdxv%2F4LcnCzCGkLT4ho1mN6e9FZhvv5KUUhozzPHSCIzO%2FNCUqWr2DW6%2FGXFieIP%2FDtvpU1zIrx1PCN3SaE3EX29B5B3yZfZgMDsQtPvT8MQEjqgEJmz7o1fKpYH7v1SvAGBXkCgrhZqHAXVLGyBptI0GighdglOARpKtslfwvWz3Czh0lvTWTrE6ToN9RSX9tREOyWURajK7TRxfm0OoW%2BpXR18uj%2BpulVxHD%2BhypXVAYRgW4Q2ZyA6oNOFuL9hxQCucshfkS5hXnOX3wtm%2Fe1Hl9ynt06x0uRF0Cx32gWizAQzDmIsSw9wLGcY%2BG9MxKR8cBBIIuC80cw6%2FHopq2gDws%2BMW8s%2FoD87D%2BxAxykXPTFb2KFwDMqBVPp4IWm%2FLoTLBf8q7yTb8iJ7NrTURrxi3UC3sbzMT%2BpxdsxnuMRkxvmbbd5xw9N6VIQkSsc%2FlWezjiErxGIk%2BJLC%2BZD040PiJqrq98Em67BJJjch5MVwRP400l1nv8p7D1%2B22RAW2eeWzfNJ1EZeVOxEi1MxJCkAqyiktsy0MPXrz8kGOqUB%2B6YytvmBLf9VjEsa0nhBGzkKSAYtXJhbajpPBATK0zR7nfeIaxpGvEv0QxJYMf9FJsPoFRSn6KKY1Q1udAhlENF9XByYGpHlL%2B%2BoMull%2BB6MtT%2B4MOqZTXbFEiiRNkdfm%2Bb6L1%2BeQ7wtiVjt3SiUvOyZcCHOM6CIwIa3sAHiQt5DGNzYbd1Hklg340r0k77PEPqzDKm5G9Jew3rVdGwcSsC5FPqV&X-Amz-Signature=b5494df7a478373dcb8f04af0b75d2b0d4c01a15a69ce8b7a2a4de421ea62025&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

