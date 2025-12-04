---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627XMA375%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIHoovp1XEj%2Bx8e9aS8%2FYR52GW0i6aRxq2S%2B%2FpB83OHoIAiEAzdo05W5p93t3btq%2FsB%2FRiO19v31J7SGEl%2FonaGFZ8pMq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDA5Js13uWkIOFHm8byrcAw2gecmqI2v8RSszshlr0uuaerhel%2BjFsRAN2dwQ3xwMh8cyg9peI922Z8z48%2F0011wfLC5aYaMWtvnH4EwW4SqECvx2q9mUpzix12dnZqLptEiApOgue39BTgPMlfMj0%2BMcjXSf%2Bd83269moecz1HKx8fPBUOV8NK5iorYV%2FYNTe5ZpLgtdTnD2lXCd%2BefCfnjTLgCjylWNk2gy%2BkE2oko84GMdG9czpunk13IWjfpS%2BRgo%2BMPLoKGWygJ3aoDsNwbOUsVGMQcN62VqTDjYIhrbdzG%2BUlT%2B%2FOrGBC43L3XeXfnL42WNNDp5euMRfDP55xlqjrY9PIArNdzTqKpWWuPbabLBbf6C%2F5Rh8MnmY74NNVeBdC2M%2FZY2%2FSBzNyLJR8lc0LHNLh6xgf2FHD%2BXfwuC2XvTsS%2F5AW8BOLxV2ecjL1gcMMbY%2BwhPeI1dTLzJe8nlbZ%2Fb%2B4k8DhpgCurmEFFPTzDsRnB%2BvHj5E%2Bbuauu0NZWbwy%2BlvAibJrGT66JBbkPPvKks3HbwSvSgaIMKLFVZzhuArq0KqnaRLjCnzdcuzW4jytCF8jKdGvCnrNLeQhnn6azqDJkkG9huXPzRb7w3D277Yq%2Fb2Ct%2BmCjOK0E0%2FWzPx92DJN6b7FDNMIuQxMkGOqUBVfoHY20Y1QlDbjt1lsa16DRDGS41AxNhd5DMKmu8ExGXrYMxudBM3AWzdxHFwwduEVEQ4oLEMVfEVTF0BwduP9oCwi2cQWXiM5SdIIgkJCquDXrmdorxqP3sYJBAe7vzAarJh5bURziACASfSUO44waYKFNn1Vh%2BdSTxLcJ6WTAjaV45gEv10Jfqz96nwoiPB38MNb1lF%2B2YJMN5hz540pG831lT&X-Amz-Signature=2882dc35cf1404ecc6e27e41f6ecbf726ef831e2981eb0963f6f29020eb7bec2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627XMA375%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIHoovp1XEj%2Bx8e9aS8%2FYR52GW0i6aRxq2S%2B%2FpB83OHoIAiEAzdo05W5p93t3btq%2FsB%2FRiO19v31J7SGEl%2FonaGFZ8pMq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDA5Js13uWkIOFHm8byrcAw2gecmqI2v8RSszshlr0uuaerhel%2BjFsRAN2dwQ3xwMh8cyg9peI922Z8z48%2F0011wfLC5aYaMWtvnH4EwW4SqECvx2q9mUpzix12dnZqLptEiApOgue39BTgPMlfMj0%2BMcjXSf%2Bd83269moecz1HKx8fPBUOV8NK5iorYV%2FYNTe5ZpLgtdTnD2lXCd%2BefCfnjTLgCjylWNk2gy%2BkE2oko84GMdG9czpunk13IWjfpS%2BRgo%2BMPLoKGWygJ3aoDsNwbOUsVGMQcN62VqTDjYIhrbdzG%2BUlT%2B%2FOrGBC43L3XeXfnL42WNNDp5euMRfDP55xlqjrY9PIArNdzTqKpWWuPbabLBbf6C%2F5Rh8MnmY74NNVeBdC2M%2FZY2%2FSBzNyLJR8lc0LHNLh6xgf2FHD%2BXfwuC2XvTsS%2F5AW8BOLxV2ecjL1gcMMbY%2BwhPeI1dTLzJe8nlbZ%2Fb%2B4k8DhpgCurmEFFPTzDsRnB%2BvHj5E%2Bbuauu0NZWbwy%2BlvAibJrGT66JBbkPPvKks3HbwSvSgaIMKLFVZzhuArq0KqnaRLjCnzdcuzW4jytCF8jKdGvCnrNLeQhnn6azqDJkkG9huXPzRb7w3D277Yq%2Fb2Ct%2BmCjOK0E0%2FWzPx92DJN6b7FDNMIuQxMkGOqUBVfoHY20Y1QlDbjt1lsa16DRDGS41AxNhd5DMKmu8ExGXrYMxudBM3AWzdxHFwwduEVEQ4oLEMVfEVTF0BwduP9oCwi2cQWXiM5SdIIgkJCquDXrmdorxqP3sYJBAe7vzAarJh5bURziACASfSUO44waYKFNn1Vh%2BdSTxLcJ6WTAjaV45gEv10Jfqz96nwoiPB38MNb1lF%2B2YJMN5hz540pG831lT&X-Amz-Signature=3a8e2501f7ac4d901a733e743fb1a8e7734d9c9ed0bab089f0594a15e15f384e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

