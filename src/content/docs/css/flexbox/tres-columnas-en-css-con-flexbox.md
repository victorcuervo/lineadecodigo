---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIUQGCSZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T120654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVKShx83tvifqUqA7En6cIdyr9GotekODmQymlr12mIgIhAIoWLtP%2FFizofBWlWkbIrja1qXpivlf0OYKP96%2BPnszWKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2FfwMMwnnOro%2BiOEq3AP4F3l5p%2Fnj2wJOHG49%2Foad0BzvU3iyGOKQ3Y7H98pNrJU9bcqjFHyTmNXXlkV9RUn83%2F8BvuQRZxsQQXI8DhA1pqtO2hQHPla1%2F82m1Ng18s7FGvS66oDssWmhC5gDsYpoOEV1GeFBwc55gOEzM53gOtU%2FqKBeuifJ%2B60B3klUmMBi06e6IAY0auqSSOF%2F0bd2tudFnmWUByf4%2FqbM9gZjzhaoB6QYFkfdAFI0ZIbBi5ixzJt%2F8wUeZvRIfgVFVPr0wjWqDpWb%2FIukQoHr00OUdiR%2Bk0ONf6gLBs5KaKPK8CQKRKJaJl1m7BKPQGu2S%2BjHIAwqb41EOdjuEAjL8wH5%2BcWm6xs%2BrKwQbMvqqVs8SkDfMpMj2r4hS0D9aWFe7jmxTS78mLJUlliuZI%2FP8SUhrJ968ZpkofTJuiSaWvTuowZOV5xBNzb%2Fm3l8AjdsKwC9TczNGsTgO6Et6ulJNpqe4r37AmStPzhTl2js1bJc%2BSLOaSRdLnfWEuWu6IpcSg5yFbm6DtEebKUudE8Z22FZXFuIpgCArmJZbEIR%2FUoxmv6l%2B7Qu3%2FIdSSNA0%2FX2TgpTwa2g5i8OFkSOSMAqL2lqS8qvRO8g80rkuJgpAsb52OEfsctmMPGWu68jczCcmdXJBjqkARIt%2B5XsjRHSjYUPmimxsvTnN%2FEbv6jsWn4HaLq9QI0Pmzd7SHTqjQ%2FB9nj%2B11UAvGlc7HqmCqcZo02BuFI%2B8PLOywtYi3derc2tWqR5oFg%2FqWQneMl865XbqZQh%2BMyGcBWcbBV%2FaKHIILoW2P4ra1TEBnM3XB9FDYr%2FO41%2BgJ1f1HxrF6jOKRFOWeK7cD6Oeh4BP1sowEI%2FQxw%2BKRKIzoXw11bO&X-Amz-Signature=0e1ce1eb0df9ed73db7f479b850a3d6fb1e0793d0d16ee3aa7aaacff8820832f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIUQGCSZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T120654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVKShx83tvifqUqA7En6cIdyr9GotekODmQymlr12mIgIhAIoWLtP%2FFizofBWlWkbIrja1qXpivlf0OYKP96%2BPnszWKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2FfwMMwnnOro%2BiOEq3AP4F3l5p%2Fnj2wJOHG49%2Foad0BzvU3iyGOKQ3Y7H98pNrJU9bcqjFHyTmNXXlkV9RUn83%2F8BvuQRZxsQQXI8DhA1pqtO2hQHPla1%2F82m1Ng18s7FGvS66oDssWmhC5gDsYpoOEV1GeFBwc55gOEzM53gOtU%2FqKBeuifJ%2B60B3klUmMBi06e6IAY0auqSSOF%2F0bd2tudFnmWUByf4%2FqbM9gZjzhaoB6QYFkfdAFI0ZIbBi5ixzJt%2F8wUeZvRIfgVFVPr0wjWqDpWb%2FIukQoHr00OUdiR%2Bk0ONf6gLBs5KaKPK8CQKRKJaJl1m7BKPQGu2S%2BjHIAwqb41EOdjuEAjL8wH5%2BcWm6xs%2BrKwQbMvqqVs8SkDfMpMj2r4hS0D9aWFe7jmxTS78mLJUlliuZI%2FP8SUhrJ968ZpkofTJuiSaWvTuowZOV5xBNzb%2Fm3l8AjdsKwC9TczNGsTgO6Et6ulJNpqe4r37AmStPzhTl2js1bJc%2BSLOaSRdLnfWEuWu6IpcSg5yFbm6DtEebKUudE8Z22FZXFuIpgCArmJZbEIR%2FUoxmv6l%2B7Qu3%2FIdSSNA0%2FX2TgpTwa2g5i8OFkSOSMAqL2lqS8qvRO8g80rkuJgpAsb52OEfsctmMPGWu68jczCcmdXJBjqkARIt%2B5XsjRHSjYUPmimxsvTnN%2FEbv6jsWn4HaLq9QI0Pmzd7SHTqjQ%2FB9nj%2B11UAvGlc7HqmCqcZo02BuFI%2B8PLOywtYi3derc2tWqR5oFg%2FqWQneMl865XbqZQh%2BMyGcBWcbBV%2FaKHIILoW2P4ra1TEBnM3XB9FDYr%2FO41%2BgJ1f1HxrF6jOKRFOWeK7cD6Oeh4BP1sowEI%2FQxw%2BKRKIzoXw11bO&X-Amz-Signature=5e8fc9d3f81209a7679fbbb7aa72004b332b5997fdb504399985a2ef493b68ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

