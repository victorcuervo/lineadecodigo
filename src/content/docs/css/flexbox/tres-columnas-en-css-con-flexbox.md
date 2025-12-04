---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKHHFGD4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T082206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIAIXJz72h%2FwJNf8H3%2FlE1nDnlzvalD6nwZdxXWyHE8bNAiEAj2xtiaFXLn1nActQZkT9729s1l4VF4LK%2BOz%2F7igRYQsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJapsJGmrVpvM3lV%2FyrcAzf72ZXVNQJBy8w%2ByWnc35cZhDfP1pH7snrNBAwz1BtSbI%2F%2BWIe%2Fy%2BLLQzt0ZBXHjKZDaF3hIQ542Q3Y87G%2FBzZY8NIjoCKdDV4N%2FKb8R%2B1oYlXFgeU0IFxUebuAw8wd1pKvLRv2BttGMIE35QJNv3y%2BzhUsmBFbTtgkEPmhKcWE6zb8Z8AQSu9SVp4ZDP1I8x%2B6h%2FFNvRlUwyunLSUNoAaW%2B3W4eNnR2N3MOZgbtQH7Ps85hSW7O6yyN%2FWz75glkRqTAAegIFIfc5rMRz1M0cQxaMSBfDWvPuKIO52Xzl1b8ffNtlWcjU90t6Bn%2FyRkNG%2F8n98jX%2BaCGyVa8Q0frJphFPQIbZM%2BsG1VDi8TF8vM6Beup%2B4g2PTA%2F0TuLZIp4DpbdXc4UKVeiLSnFpJRjHi36rVMLhXYxWOy1VMt0LyTo9lY73ewhyYCLneOlC3x6XTGlDgwSm%2BSL3E4n4aHttGGVW0Cxv%2FxFAY6pLONbj3aECQRXc1fwyB7MXXUCAed6Xu4LrMEKY5%2FdawfUBwAtd28141GgWxQQeRokynzBQqEP758fgegmHCJ%2FkmkgdfE8xhyT2RW3v%2BkmvbiOmxfDREHAmdgkiGuzSNxSnUjUFSHZPdisJ3S%2Fc3PqMcPMJyGxckGOqUBshXLzySWzGIsUQPBgTxSyk3Wyj%2BNADI3If44MNH9qF7ViX1LO0SHNkM29%2BoX%2F%2BoKoMagKnbyky0d%2FEFbvQ9Xp47wjRS5Py8ux8P92JI7DN8Hfd6M0kMNrmQKLMsJsQh5NBF2Wtj%2BRleSBL3kQaLTEf2LzOl7Ls0wUwk3ZDbeROitpK1EeIZLEgdEnL1vtzlchi4jkew104UMGA4eLaGbQaplaPLv&X-Amz-Signature=c22881325f6f20e875072f2fa3f48512899d2860943636fee00a7f5704eebac1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKHHFGD4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T082206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIAIXJz72h%2FwJNf8H3%2FlE1nDnlzvalD6nwZdxXWyHE8bNAiEAj2xtiaFXLn1nActQZkT9729s1l4VF4LK%2BOz%2F7igRYQsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJapsJGmrVpvM3lV%2FyrcAzf72ZXVNQJBy8w%2ByWnc35cZhDfP1pH7snrNBAwz1BtSbI%2F%2BWIe%2Fy%2BLLQzt0ZBXHjKZDaF3hIQ542Q3Y87G%2FBzZY8NIjoCKdDV4N%2FKb8R%2B1oYlXFgeU0IFxUebuAw8wd1pKvLRv2BttGMIE35QJNv3y%2BzhUsmBFbTtgkEPmhKcWE6zb8Z8AQSu9SVp4ZDP1I8x%2B6h%2FFNvRlUwyunLSUNoAaW%2B3W4eNnR2N3MOZgbtQH7Ps85hSW7O6yyN%2FWz75glkRqTAAegIFIfc5rMRz1M0cQxaMSBfDWvPuKIO52Xzl1b8ffNtlWcjU90t6Bn%2FyRkNG%2F8n98jX%2BaCGyVa8Q0frJphFPQIbZM%2BsG1VDi8TF8vM6Beup%2B4g2PTA%2F0TuLZIp4DpbdXc4UKVeiLSnFpJRjHi36rVMLhXYxWOy1VMt0LyTo9lY73ewhyYCLneOlC3x6XTGlDgwSm%2BSL3E4n4aHttGGVW0Cxv%2FxFAY6pLONbj3aECQRXc1fwyB7MXXUCAed6Xu4LrMEKY5%2FdawfUBwAtd28141GgWxQQeRokynzBQqEP758fgegmHCJ%2FkmkgdfE8xhyT2RW3v%2BkmvbiOmxfDREHAmdgkiGuzSNxSnUjUFSHZPdisJ3S%2Fc3PqMcPMJyGxckGOqUBshXLzySWzGIsUQPBgTxSyk3Wyj%2BNADI3If44MNH9qF7ViX1LO0SHNkM29%2BoX%2F%2BoKoMagKnbyky0d%2FEFbvQ9Xp47wjRS5Py8ux8P92JI7DN8Hfd6M0kMNrmQKLMsJsQh5NBF2Wtj%2BRleSBL3kQaLTEf2LzOl7Ls0wUwk3ZDbeROitpK1EeIZLEgdEnL1vtzlchi4jkew104UMGA4eLaGbQaplaPLv&X-Amz-Signature=00edd8dd46f600aca5147812de126dabc1935bfc3a77893ebb922ffe7e770140&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

