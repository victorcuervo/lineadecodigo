---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV5T2MJ4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T213730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAEgmt6o6zCXoCoIvbJb8usdVzMTZp%2BNVVYUJRFxu%2BLFAiEAgyCKWAXf2LmkviH6ckZsOivnR4OaO1Kubc4ODW90ujYq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPWKqvvLWnstK5HifircA%2FlO5PV738rcYpvJqgMFkjpEn%2BW3jhpXpjZl5J3RqmLRXaOlWZAkM6l4uuuJrWiX6hJ6cWl%2FQvtTiQknQdOtkx2Y%2BxTatkUJf8gijOsWm4Hd7Sn6uNhVs5OVXP6nBjchjLHSShXj9%2Fz8ZDTJsjDUsSJRfgT%2Fv1vO2Wno11ZFlFoa85Fo%2BoeyAG%2BJAB0FT30TUIMEOw4ISVmBpB3vGclmfLXz3KY6s3yZ9HZWnriX7tinr5XS4DZOgEcDA%2FZbPX2PLisOprA2wP7JKp0jC2xRtnknRf0JoVtiIpLWykFNUBaCk0cdfo3jPRvGX4wbeo1ib5gEkXzqam9oMbpBwwZmcjom5VsIiFMva2KzdMNFVf2K3yHGEJrlnM2SrF1K5wbYoEE8%2F8gmJ0gnSDgi0cl9KLP2FO%2F4oPNLrEp53DY8O4xGhN3HzQhPG2cU2ymXn6HTlEhqPkJY4X7FneogBdce6SR7NdumHFkOAsPl047RYa6h9o73NfwEj8dJyQpjNv%2B%2Bv3KKqCNe1BTbsyS9%2BR5tbvsqZ6dBaUqKkXokXPA4DyWEIwDXZ0niYMbvGTvAVZCBxGRdyhnIGkAgzss5AyOoeXyQItDXirjDATfkGrzDO%2B1iL506GqQSrYezgjlbMNGLzckGOqUBf67wBn26gvuSig2P6Fqm0Iv4G8grMGvwLUEc7f3DjMsTVAOmblorNuYyL90MbUfO2zfH7OBJy7fRTDFgZeeya6uVAQC5cCa3dzMsAUD4P%2F5z%2FDMEaQD5KIbWrU3avjxoKc%2BXlO%2F9TWVE%2F7vwtVb%2FMrNagezu8gbOFWC6eRtYZIRSVfBSpQpT6ElFR4N%2BOdidmAXW6ivnxnRvL7ZGv2u5Ge2ui3%2BA&X-Amz-Signature=3ca8122915e9b3a7c2161b33b198abfa065735fdf637d42a7232652c4ef5d31e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV5T2MJ4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T213730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAEgmt6o6zCXoCoIvbJb8usdVzMTZp%2BNVVYUJRFxu%2BLFAiEAgyCKWAXf2LmkviH6ckZsOivnR4OaO1Kubc4ODW90ujYq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPWKqvvLWnstK5HifircA%2FlO5PV738rcYpvJqgMFkjpEn%2BW3jhpXpjZl5J3RqmLRXaOlWZAkM6l4uuuJrWiX6hJ6cWl%2FQvtTiQknQdOtkx2Y%2BxTatkUJf8gijOsWm4Hd7Sn6uNhVs5OVXP6nBjchjLHSShXj9%2Fz8ZDTJsjDUsSJRfgT%2Fv1vO2Wno11ZFlFoa85Fo%2BoeyAG%2BJAB0FT30TUIMEOw4ISVmBpB3vGclmfLXz3KY6s3yZ9HZWnriX7tinr5XS4DZOgEcDA%2FZbPX2PLisOprA2wP7JKp0jC2xRtnknRf0JoVtiIpLWykFNUBaCk0cdfo3jPRvGX4wbeo1ib5gEkXzqam9oMbpBwwZmcjom5VsIiFMva2KzdMNFVf2K3yHGEJrlnM2SrF1K5wbYoEE8%2F8gmJ0gnSDgi0cl9KLP2FO%2F4oPNLrEp53DY8O4xGhN3HzQhPG2cU2ymXn6HTlEhqPkJY4X7FneogBdce6SR7NdumHFkOAsPl047RYa6h9o73NfwEj8dJyQpjNv%2B%2Bv3KKqCNe1BTbsyS9%2BR5tbvsqZ6dBaUqKkXokXPA4DyWEIwDXZ0niYMbvGTvAVZCBxGRdyhnIGkAgzss5AyOoeXyQItDXirjDATfkGrzDO%2B1iL506GqQSrYezgjlbMNGLzckGOqUBf67wBn26gvuSig2P6Fqm0Iv4G8grMGvwLUEc7f3DjMsTVAOmblorNuYyL90MbUfO2zfH7OBJy7fRTDFgZeeya6uVAQC5cCa3dzMsAUD4P%2F5z%2FDMEaQD5KIbWrU3avjxoKc%2BXlO%2F9TWVE%2F7vwtVb%2FMrNagezu8gbOFWC6eRtYZIRSVfBSpQpT6ElFR4N%2BOdidmAXW6ivnxnRvL7ZGv2u5Ge2ui3%2BA&X-Amz-Signature=b87e62ae382fc42fd03406cd82e3c9fe9491ca5267f7c1d003b8c9366c8f625f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

