---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I4FDLLC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T083425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrcXyMJPPKNuR1MFFh%2BuC6rKORVgoQyO1Dw6fGzvcv7AiAha4KsKCcj5q8nDV8xkCmXT%2FRrdwEsne%2F%2FMeVO1J9yZyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMSSKO7qKVMlmn%2Bo%2BbKtwDtikRF3miu8piP6ZH1e8cR5pGVcZD9a1ZmMm74K6och7vBW3vYcvM6x3D5IAjFwcIMAAB02sXVhKmSG9bJX62sABMbmw9Y1vyJqdlDhGQxDF8zNllUlQaAUEU%2FOJR304piI3vck4Aybrck1M0eBctsZUXWAdzw1OVFSN1f3qrw8g4l3azS8CKHNRn%2Fwf1Swq987Lg%2FwYPhGTcO121vG%2B004ZJWfvwpAnDzMRXkPDdav7eDh1aSuFzoln04dFVkolU7nilhUH5l8KCAf2VCIBfAqKYNt7qzkZV%2FrG8PkUkKXTYXzxQHA2Lb9IDKgoo3MmSoihRmWPMJUVXPNrTFs5ybY9czD2stWAaVOAVfqPuC%2F%2B3qSZ1XoXm81OEmHFMu9obof8lljkm0zlOBWAKroOOwtgPtSogbfNqYQC%2BBjyiNgeplLVnvoqq21kkPMlyjfoN2zDueLIgNk4MGJXtP%2FkxqZUTiYRlSXuFk8SoyhtbYWsLur9mF7ryt1UjttrbDk8JQj%2BZDBtLyUqJu51FB%2Bxx0XI1cM65dJJFc2j%2B8pJEp5Qj0CqeEWJSO%2Fah6FSFmy8eF0djjNogy1ORC5flJ3cyVXusPsIkA3kTjHmhX6R4ebzzXvi0Nd5uJLfLh0ww5q%2FJyQY6pgG7Cv%2BrgE%2FKdVlLk4MXlrV3Arer9f5ThkP41DLxpr2fG3afquoaOshg7s0djl6HqjD%2FudlTukawIY1IqvIGO309hGydvj5hErOXIuczSjdur6uCzaaFjxJDWz5dWdNmCcPmTPBdLNQ5M1rPwU2bxRGBWlMOsDlncn5BamE1lTeVOBoEZBoFMWaN%2FUDBDgJH1V6NwZVnohlScMt%2FI8lmcKZcqyrsJpQc&X-Amz-Signature=6a19dbcbd14469fe05ee97f6fd119c69ac740de026e6e10ee117cd87354c91b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I4FDLLC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T083425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrcXyMJPPKNuR1MFFh%2BuC6rKORVgoQyO1Dw6fGzvcv7AiAha4KsKCcj5q8nDV8xkCmXT%2FRrdwEsne%2F%2FMeVO1J9yZyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMSSKO7qKVMlmn%2Bo%2BbKtwDtikRF3miu8piP6ZH1e8cR5pGVcZD9a1ZmMm74K6och7vBW3vYcvM6x3D5IAjFwcIMAAB02sXVhKmSG9bJX62sABMbmw9Y1vyJqdlDhGQxDF8zNllUlQaAUEU%2FOJR304piI3vck4Aybrck1M0eBctsZUXWAdzw1OVFSN1f3qrw8g4l3azS8CKHNRn%2Fwf1Swq987Lg%2FwYPhGTcO121vG%2B004ZJWfvwpAnDzMRXkPDdav7eDh1aSuFzoln04dFVkolU7nilhUH5l8KCAf2VCIBfAqKYNt7qzkZV%2FrG8PkUkKXTYXzxQHA2Lb9IDKgoo3MmSoihRmWPMJUVXPNrTFs5ybY9czD2stWAaVOAVfqPuC%2F%2B3qSZ1XoXm81OEmHFMu9obof8lljkm0zlOBWAKroOOwtgPtSogbfNqYQC%2BBjyiNgeplLVnvoqq21kkPMlyjfoN2zDueLIgNk4MGJXtP%2FkxqZUTiYRlSXuFk8SoyhtbYWsLur9mF7ryt1UjttrbDk8JQj%2BZDBtLyUqJu51FB%2Bxx0XI1cM65dJJFc2j%2B8pJEp5Qj0CqeEWJSO%2Fah6FSFmy8eF0djjNogy1ORC5flJ3cyVXusPsIkA3kTjHmhX6R4ebzzXvi0Nd5uJLfLh0ww5q%2FJyQY6pgG7Cv%2BrgE%2FKdVlLk4MXlrV3Arer9f5ThkP41DLxpr2fG3afquoaOshg7s0djl6HqjD%2FudlTukawIY1IqvIGO309hGydvj5hErOXIuczSjdur6uCzaaFjxJDWz5dWdNmCcPmTPBdLNQ5M1rPwU2bxRGBWlMOsDlncn5BamE1lTeVOBoEZBoFMWaN%2FUDBDgJH1V6NwZVnohlScMt%2FI8lmcKZcqyrsJpQc&X-Amz-Signature=8599ca703d127ce68e2693b08abe25b85aee3d9c38951954c8900fff25cec29b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

