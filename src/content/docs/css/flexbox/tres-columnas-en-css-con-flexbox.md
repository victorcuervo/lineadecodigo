---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JNGRCGB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T111058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6onbTBMczzBhwq03ChAPLy0v0tXhM4tWkssa%2BEk4Z3AiEAzfPLaEGPILA%2BAOx4oBlbE05uvD8DSUvGehMeLYjDncMq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDFKx%2BUPlm4tGeVRq3SrcA%2BeLs1Kt952E9lf1IRnWoWdFwECjbtAEje%2Fnih9XL73NHWTWZKGGdio1PiFLcrFdUXRIZKG66p%2FV7uIgrXLewj86W1Wl1PuXZJQ7HXrH5NQlOsVMmbcDhoNfCyufVbLWFFpc4Qyutf4zk7nkm70HuuFj5%2F5mpNCF4%2FBiDjAHXOA0ytlLHMM%2Fify0c4%2FhfeYXeZLye6wm749GcKeA0vmiQJXJPwRsqBhI8QKyXvSgkvYIL%2BVXUBszwVT15GEgj0hTSjaRgyklja9e%2BWvT%2B9%2FCreMSPO2rz%2F5hkVTm6jM5t40Df3eITeddU2dithgDlabvWO2VtiuLvFlcuYXh6M4SIIZj6Z8fP2TmurjjXURopjf4h9dD9iItxlVoJFJA6ZbiYVQXrsy8ZOoJeFEF83rbhpOnTd6GsSNdvkAADnOpIhdOFQyEqD6HetY8SgrdQtSpxZ4cSC7yX8Evtdp5HukN%2BOj%2B99rBJDkTa2zk%2BOUp47ZYChgJy6oD9EhnKSCnKGuhDUyllxU%2FEDENIWllUgkL4QKmvqXJIHxQJXI2tvCAGjTYSOv86QGR6Dyc8saxPKtVM0rgbz5w6xErOHG9iWYb%2FNMYMvKiCOaWrcMdclMarPud3LD1SCGHjvdhvhiPMO6J0MkGOqUBVZKe01WxyHn8cIGXgu0l511VQ49xH8Tz0RIp1b4693Pveg4FRoVFA8Gkmv6uC2ZdoSI6skwU%2FjygkGvTYQ42nDq2CW3GwgbdxrYxFoC727wDmykHdvvCD6L%2Bp4TOqtaC1gXu%2FfcTOnozcXQMZke%2Fin5bRVWe7eg6aW2U6klMg5QuSxLlJrGkxmVG0O4Rk3u8hC5XAEEvW0CuA9VL5L9rflcu6KUs&X-Amz-Signature=f4101dac72657265123325415757e338afd5f38eb3d39908fa79cf67c770dae3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JNGRCGB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T111058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6onbTBMczzBhwq03ChAPLy0v0tXhM4tWkssa%2BEk4Z3AiEAzfPLaEGPILA%2BAOx4oBlbE05uvD8DSUvGehMeLYjDncMq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDFKx%2BUPlm4tGeVRq3SrcA%2BeLs1Kt952E9lf1IRnWoWdFwECjbtAEje%2Fnih9XL73NHWTWZKGGdio1PiFLcrFdUXRIZKG66p%2FV7uIgrXLewj86W1Wl1PuXZJQ7HXrH5NQlOsVMmbcDhoNfCyufVbLWFFpc4Qyutf4zk7nkm70HuuFj5%2F5mpNCF4%2FBiDjAHXOA0ytlLHMM%2Fify0c4%2FhfeYXeZLye6wm749GcKeA0vmiQJXJPwRsqBhI8QKyXvSgkvYIL%2BVXUBszwVT15GEgj0hTSjaRgyklja9e%2BWvT%2B9%2FCreMSPO2rz%2F5hkVTm6jM5t40Df3eITeddU2dithgDlabvWO2VtiuLvFlcuYXh6M4SIIZj6Z8fP2TmurjjXURopjf4h9dD9iItxlVoJFJA6ZbiYVQXrsy8ZOoJeFEF83rbhpOnTd6GsSNdvkAADnOpIhdOFQyEqD6HetY8SgrdQtSpxZ4cSC7yX8Evtdp5HukN%2BOj%2B99rBJDkTa2zk%2BOUp47ZYChgJy6oD9EhnKSCnKGuhDUyllxU%2FEDENIWllUgkL4QKmvqXJIHxQJXI2tvCAGjTYSOv86QGR6Dyc8saxPKtVM0rgbz5w6xErOHG9iWYb%2FNMYMvKiCOaWrcMdclMarPud3LD1SCGHjvdhvhiPMO6J0MkGOqUBVZKe01WxyHn8cIGXgu0l511VQ49xH8Tz0RIp1b4693Pveg4FRoVFA8Gkmv6uC2ZdoSI6skwU%2FjygkGvTYQ42nDq2CW3GwgbdxrYxFoC727wDmykHdvvCD6L%2Bp4TOqtaC1gXu%2FfcTOnozcXQMZke%2Fin5bRVWe7eg6aW2U6klMg5QuSxLlJrGkxmVG0O4Rk3u8hC5XAEEvW0CuA9VL5L9rflcu6KUs&X-Amz-Signature=d398892bd238472e4d03f036ad1c0f6eb35a3b25618462e41eb3dafcf27c5a0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

