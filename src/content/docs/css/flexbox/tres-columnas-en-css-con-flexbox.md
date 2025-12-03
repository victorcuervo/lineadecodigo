---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTBAMFBT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDhwqpPGG3EghvBjq6EC5awWYrw4yQke8IcXVF0JqfJcgIhAJZtys039ntoRtwKL9qUTwUciy7ww2LfXQe5Ip4axr9RKv8DCDgQABoMNjM3NDIzMTgzODA1IgzAZ9d1DP%2F2gAKJ1r8q3APVLFSP3fB%2F5SL3%2FiuAj%2FQDELOnwrHryifl0E%2FAHpvy00IpmJiicEeSc31KCXftOL3ZITT2niADiK75G1ORdhcGopPlDuFT3nGQSQ7E8jc2eeYur8mgUIdsKY5vLu51xKdqIxoHeMYQypH5ONxYM7I75JAgkbsePOwtWmHiH7w1C9qALGvIX%2Bf8two3lo45%2F4NUrLTErcXGt6nhuhpUd%2Bvhz4GJcCNMhhxz%2FGZHy60KD7BjSK4iyeCaFNmc%2Fx%2B4oDOzaVCitQivJOWedVy51A%2BiSYesFC48jqnlyPrwcvNA3j9UCtMgM%2Br6aN5C7nrRv2HnY5Fbh37kxnKQidQK4iljHBx4SUgQdJ1O%2Bnoyj86Vn3JwFzBzn4rGbWvPJh4uuhCEcwSBYQQIWfXD%2FCemPVtpYIJeI1yXMgHU4XXJ10jG%2B2Pu18g5Ms%2Ffuv%2Fww1IGNCA4Jvkhs5e6SHR6%2FMHYveBZ1qyMq6gktxQWjPoF6ParZO03l4iCXZPVs9kdPVMcbXqWOry%2BvgO0QC%2FxgWfbFGK3gQQ8KPTwYM43d%2Bq39NS5vB2xBWOn3MaFiW9%2BwUMfCOnmJ1X%2F%2FP5wkGvQXLjMgp%2FAjmClIP5MNv9ejytBSikrxBpm0FnYd%2FBf4DeEkDC1%2BMLJBjqkASMbwHq6drAAejz%2BlrEZMRhBk%2Bw%2FSQ5SMfdacFslzyhfxtN%2BwJa31rNeDOgi%2F2MokDQDclTVmuAqAeswDV%2BEFpGy8yOfkRcmZyw8nm5lLhkslwDVS2T2qGeOcVxqdqIp3pBFggNQuQZZ2X34vGgQNENezwU9zh92vsL6%2BeyoWnQMIHiE185XYd%2BTzqew8pT78K%2FUhpi1IpyfcCebdI3oOQq7tfDc&X-Amz-Signature=0f7ca7e2d0caa63557497ca05e882d027f659f475d83d290e1cd7349d1163cae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTBAMFBT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDhwqpPGG3EghvBjq6EC5awWYrw4yQke8IcXVF0JqfJcgIhAJZtys039ntoRtwKL9qUTwUciy7ww2LfXQe5Ip4axr9RKv8DCDgQABoMNjM3NDIzMTgzODA1IgzAZ9d1DP%2F2gAKJ1r8q3APVLFSP3fB%2F5SL3%2FiuAj%2FQDELOnwrHryifl0E%2FAHpvy00IpmJiicEeSc31KCXftOL3ZITT2niADiK75G1ORdhcGopPlDuFT3nGQSQ7E8jc2eeYur8mgUIdsKY5vLu51xKdqIxoHeMYQypH5ONxYM7I75JAgkbsePOwtWmHiH7w1C9qALGvIX%2Bf8two3lo45%2F4NUrLTErcXGt6nhuhpUd%2Bvhz4GJcCNMhhxz%2FGZHy60KD7BjSK4iyeCaFNmc%2Fx%2B4oDOzaVCitQivJOWedVy51A%2BiSYesFC48jqnlyPrwcvNA3j9UCtMgM%2Br6aN5C7nrRv2HnY5Fbh37kxnKQidQK4iljHBx4SUgQdJ1O%2Bnoyj86Vn3JwFzBzn4rGbWvPJh4uuhCEcwSBYQQIWfXD%2FCemPVtpYIJeI1yXMgHU4XXJ10jG%2B2Pu18g5Ms%2Ffuv%2Fww1IGNCA4Jvkhs5e6SHR6%2FMHYveBZ1qyMq6gktxQWjPoF6ParZO03l4iCXZPVs9kdPVMcbXqWOry%2BvgO0QC%2FxgWfbFGK3gQQ8KPTwYM43d%2Bq39NS5vB2xBWOn3MaFiW9%2BwUMfCOnmJ1X%2F%2FP5wkGvQXLjMgp%2FAjmClIP5MNv9ejytBSikrxBpm0FnYd%2FBf4DeEkDC1%2BMLJBjqkASMbwHq6drAAejz%2BlrEZMRhBk%2Bw%2FSQ5SMfdacFslzyhfxtN%2BwJa31rNeDOgi%2F2MokDQDclTVmuAqAeswDV%2BEFpGy8yOfkRcmZyw8nm5lLhkslwDVS2T2qGeOcVxqdqIp3pBFggNQuQZZ2X34vGgQNENezwU9zh92vsL6%2BeyoWnQMIHiE185XYd%2BTzqew8pT78K%2FUhpi1IpyfcCebdI3oOQq7tfDc&X-Amz-Signature=a04661e5f14401a852c1e4705df3e4dfb7935e9da3a3481cb966d661b2ab670d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

