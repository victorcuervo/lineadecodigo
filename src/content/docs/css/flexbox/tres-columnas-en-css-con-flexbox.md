---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZHTVJSS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T232123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMks1k2ShihvHUsQapTfHVvfEh6JYGb7nFfbocRCmMFAIgUzvOa2Ia5ImH5MAsv94dJCp0Y3K%2FsPRaNGJBxkevl5MqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2B462INV8xvWGEmDircAx12bqvhuVW4bwdKxAyXOwAjkxBcRNrJ9gbqU08BtkPhk2LVE%2F0DbaAnpvpVQaETPt7sBN4BpQliiTfGz52nyEsIvqBTm%2FTgLgqUFoOjI5%2BrmLPiuQBDfkn6peo6zCL%2Fs%2BiokPuYeqGawNFD0ECMhkMCQFovezedFEJ6K0k1uKDMdFmxWyu8xLbBpmd7rSpscWXPQ646CzhIMkIPcKVy%2FlgkrYAIY4e3iCD41FdrpkXAOnfrg%2FWeL6Z6rkpShwct453wb9h1T9M%2BmUzRPJu%2Bg8Nv7euh7KXq0upDB971zPmfyrTSjAxu8UHuG0BhnESHqCZFO%2BiUTAD56ObQbV02YazNr5r2A%2Blgips4A9K%2F8PWvHvWET1%2B%2Fa56z9OaGmAdkLpP6cjs4QyDow73l2PetyjedirN5FOuHy6uMcH74iagkctCfvOin6NQeiin4PH%2BmBv9ShDVRAMikTybkEcFrvpIPOPA8HNk7Wl2DMontJKXLBhTEj%2FsRUzSyR2pNHrs4dq8YZfhdDQZ6QjA0kV2Qm1IzK9IMFK%2B7HlN4bHC21J21NfTwQSt9GYP3Eo8RpRzXcu4LHnA4T7ZnE4i8KeJVDjdktprjMvPTT700Bhad8FvDIiqo7bDjA%2B2Mcob%2FMLGi3ckGOqUBaFL9e2VzyMkSbPaDp4b6v%2FwmObN%2BXBanDUIZd7inmqs2Zf6h0jjByXyERA%2FBSM1pFfxFWIbLrxTwlT4TiR9VbI%2FJu2kZr1iqMAA5RTBzCoivHXkFMOtc00bOU9ShR3GIW0p1gifG3f%2ByHIXjA2u4PQTI1khFY5r%2Fm4uqJUDxtRbFm%2Bu5ksBCcPeFPzKzW6GGAJbk6eMaARIWvgC7%2BMmvcXePL7gY&X-Amz-Signature=657cebd70526d73446f9e81846414fb885cc95ba223f88141956a7ed0c5a8ba8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZHTVJSS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T232123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMks1k2ShihvHUsQapTfHVvfEh6JYGb7nFfbocRCmMFAIgUzvOa2Ia5ImH5MAsv94dJCp0Y3K%2FsPRaNGJBxkevl5MqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2B462INV8xvWGEmDircAx12bqvhuVW4bwdKxAyXOwAjkxBcRNrJ9gbqU08BtkPhk2LVE%2F0DbaAnpvpVQaETPt7sBN4BpQliiTfGz52nyEsIvqBTm%2FTgLgqUFoOjI5%2BrmLPiuQBDfkn6peo6zCL%2Fs%2BiokPuYeqGawNFD0ECMhkMCQFovezedFEJ6K0k1uKDMdFmxWyu8xLbBpmd7rSpscWXPQ646CzhIMkIPcKVy%2FlgkrYAIY4e3iCD41FdrpkXAOnfrg%2FWeL6Z6rkpShwct453wb9h1T9M%2BmUzRPJu%2Bg8Nv7euh7KXq0upDB971zPmfyrTSjAxu8UHuG0BhnESHqCZFO%2BiUTAD56ObQbV02YazNr5r2A%2Blgips4A9K%2F8PWvHvWET1%2B%2Fa56z9OaGmAdkLpP6cjs4QyDow73l2PetyjedirN5FOuHy6uMcH74iagkctCfvOin6NQeiin4PH%2BmBv9ShDVRAMikTybkEcFrvpIPOPA8HNk7Wl2DMontJKXLBhTEj%2FsRUzSyR2pNHrs4dq8YZfhdDQZ6QjA0kV2Qm1IzK9IMFK%2B7HlN4bHC21J21NfTwQSt9GYP3Eo8RpRzXcu4LHnA4T7ZnE4i8KeJVDjdktprjMvPTT700Bhad8FvDIiqo7bDjA%2B2Mcob%2FMLGi3ckGOqUBaFL9e2VzyMkSbPaDp4b6v%2FwmObN%2BXBanDUIZd7inmqs2Zf6h0jjByXyERA%2FBSM1pFfxFWIbLrxTwlT4TiR9VbI%2FJu2kZr1iqMAA5RTBzCoivHXkFMOtc00bOU9ShR3GIW0p1gifG3f%2ByHIXjA2u4PQTI1khFY5r%2Fm4uqJUDxtRbFm%2Bu5ksBCcPeFPzKzW6GGAJbk6eMaARIWvgC7%2BMmvcXePL7gY&X-Amz-Signature=9d2e017357858d97bcdd95a611330bb44321a4b172ab76e7f4e8b21000990ee5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

