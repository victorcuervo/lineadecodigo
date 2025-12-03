---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U52H46U7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T042042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQD%2F1Bxgl4ZSphw595s84Ks8C65R2tdEEN8k2tFaEx07xAIgcXhfaaAIODILFe%2FQD1T2zYDvxADGRTNsii2Ek%2BwStS8q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDISJwftoFukxBVslRCrcAyEg6WDwUc6CmOTWVDwhYErGp1CEcLzITrkb5n4diuHyhdxtnJyLMtq0VI%2F1Xlbn%2F%2F8WUuuNA3Sh%2F5P7SF20msWftm%2FEalri9JOf9XGLty15lHVzcvEWwXvyiLlANzhDaPJxQS0ze2QruH4CimJn9zVQMxtHtN9IBnbFFWwQymlMi9TLeVGhXNFXJZrKz%2BNkNv4QFXe1WhCE4H6oalkIcTZPwGDqPjzwq4FgyzAhcQjbZtgCgQcwryevQJw4%2BiYES1FnRlNxto0JF3%2BV9cHnVfKY2CVFVSJO4U4typDGZenNPMOyiu2gzTSf0QyU9Ys5c%2BDxfwHL7O1KMkhRMeqct%2BJP86Bk1S6vFLhHKxiXvwmo3Y6nFfg5yueLYXQR6OnEs3ok%2FZHJ06OZZ7TWVaRBc8fvOXiDbXD7ymTNB8dcUUX71ByDWrqjP3z9F3xoFZrxJ%2FZNgQhvUqUT6xxbgsM52swX2%2BvMlyQzhSn9kSJDtdrtCDb1K3d0m1LqwmEfoGY8dMyb9vCMJ%2FtWPejJIsaptM%2FJMECNaSvgGa4XHr47WyIEaPQjk2Oi8yFABN5wxl03wyrmEq2ESKl6UkFzAFk5VTBoOMJOdErTWo%2FTrH5fsJbunysftI%2FTyziVWu29MMqWvskGOqUBaYr%2FyVxnw4pYi1XVTMGKc5AG8yQdxvfiXu9XxYiCxdS6u958jNE5nOV1OruTwy0u0X3vcJdKgnfIVnwgwb3vrKxeFo6Ny8NTTl6LtJAM7p1COGCHh%2FBK8tRUUkgFmFZb%2BEQ41PS%2B2KSDSla14ijaW9T8JdBuJCzXS6A42xRt85%2BSU8%2FMqKTCcNOBBPXIi2WDyDny4aWUGG66rZJ5j2%2BzdP7s3wt6&X-Amz-Signature=9dd354e0246bb1c6bec0533ea4e30519348bd6627d9a4bb3698c67009fe80131&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U52H46U7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T042042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQD%2F1Bxgl4ZSphw595s84Ks8C65R2tdEEN8k2tFaEx07xAIgcXhfaaAIODILFe%2FQD1T2zYDvxADGRTNsii2Ek%2BwStS8q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDISJwftoFukxBVslRCrcAyEg6WDwUc6CmOTWVDwhYErGp1CEcLzITrkb5n4diuHyhdxtnJyLMtq0VI%2F1Xlbn%2F%2F8WUuuNA3Sh%2F5P7SF20msWftm%2FEalri9JOf9XGLty15lHVzcvEWwXvyiLlANzhDaPJxQS0ze2QruH4CimJn9zVQMxtHtN9IBnbFFWwQymlMi9TLeVGhXNFXJZrKz%2BNkNv4QFXe1WhCE4H6oalkIcTZPwGDqPjzwq4FgyzAhcQjbZtgCgQcwryevQJw4%2BiYES1FnRlNxto0JF3%2BV9cHnVfKY2CVFVSJO4U4typDGZenNPMOyiu2gzTSf0QyU9Ys5c%2BDxfwHL7O1KMkhRMeqct%2BJP86Bk1S6vFLhHKxiXvwmo3Y6nFfg5yueLYXQR6OnEs3ok%2FZHJ06OZZ7TWVaRBc8fvOXiDbXD7ymTNB8dcUUX71ByDWrqjP3z9F3xoFZrxJ%2FZNgQhvUqUT6xxbgsM52swX2%2BvMlyQzhSn9kSJDtdrtCDb1K3d0m1LqwmEfoGY8dMyb9vCMJ%2FtWPejJIsaptM%2FJMECNaSvgGa4XHr47WyIEaPQjk2Oi8yFABN5wxl03wyrmEq2ESKl6UkFzAFk5VTBoOMJOdErTWo%2FTrH5fsJbunysftI%2FTyziVWu29MMqWvskGOqUBaYr%2FyVxnw4pYi1XVTMGKc5AG8yQdxvfiXu9XxYiCxdS6u958jNE5nOV1OruTwy0u0X3vcJdKgnfIVnwgwb3vrKxeFo6Ny8NTTl6LtJAM7p1COGCHh%2FBK8tRUUkgFmFZb%2BEQ41PS%2B2KSDSla14ijaW9T8JdBuJCzXS6A42xRt85%2BSU8%2FMqKTCcNOBBPXIi2WDyDny4aWUGG66rZJ5j2%2BzdP7s3wt6&X-Amz-Signature=ee06ebf2c8ab99204dfeeaff9bcda920e8898505a2ebc989399a6b65e2d9d290&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

