---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ITMBCGI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T100513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDKAJ3IZM%2FQgrHzoTU%2B%2FCm6JXcX%2FPg40YjXy6WfVUguXwIgI8uX1Y8YEsGDr5F0gtcOwtJIW%2FiVJhZldIp5S01O20Uq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDivf6PVq26%2FH%2Fcq9CrcA6PVpuuqjRu%2FfGGaKclQWY0pca3f55D9tvXEfGCrcGzzXbqQDBof3emdzO3o04%2BhjuMqMciCPmJl%2Fxfupq5N%2BgGbZHh%2BD1VCATPdXybgSQwTytK75%2FAgVPB9VnrzpXoqeIjmYS1haqGu9NQw8O9NVHQcY9w%2Bjy7Qy8eMWtAI02v2Q83RweyVIgsmLImfKU1s16wiBr6cgKCPLmFNQ5dNebEmSL1dzk92HHLtJ4fDLNeXCYsOwJCN8rrjXvULb1u%2BWptzKAaFDFQS3LPR2IG3sG1LokBLaleHQozMKziPHs5odeB5bD2rpAWKzaIHAw7ENyra0CgjlLbGM2%2FGQTs7XEuRXCdIPDxDSJN8xcr2xpC2dt6%2B%2BC7BF4eTaicQ4bm1ICHTPZdr1MOLZmiWi5l134l78ypd8KCzaSw9zs6A%2Fe4O8kcILUBxRl5qcERtlvuKEmJT5UzAkcZupbSXKC4GYgQKi1D75WWI8TXEjvOlH3InIcVkagJMVxhuYpMTu7QtzT1PJHW%2FH44hV97zNuVqOhMsIto13FfdnadXiTwm4rpcrFR1K7WlP38TlaGA1itqixfzcbz3D0%2FBNLLvXXWtgdX1ibaJ%2FZAFoDVPHyo%2FLUYUmt8eD%2BGDMd5AflwsMI%2BrxckGOqUBkrU9EtAm0k2mSZD%2BtcAGXculwBqx3Ld1Zc0L9FspzW2eq%2FT7NhRBU40%2FgaoXv8M8sQfBH8VMIqT%2FxoBVxcZLhiBXdAn9GDUCpBbdayrXrIUlBSTaTD96GET9Eb6MjAefvLuoK3n3LMVJlKVo94dEXswwHjrQQATuXUQPoinpY%2Fk3fykmTzm7s5%2FSrPBLfN%2B6vqHennRUT3rlcqWwXRw6uKMz0Z75&X-Amz-Signature=a1aedea5a0dd33faf42d3e1697dace96cc3514a1e210e3baafd9545662a6c139&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ITMBCGI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T100513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDKAJ3IZM%2FQgrHzoTU%2B%2FCm6JXcX%2FPg40YjXy6WfVUguXwIgI8uX1Y8YEsGDr5F0gtcOwtJIW%2FiVJhZldIp5S01O20Uq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDivf6PVq26%2FH%2Fcq9CrcA6PVpuuqjRu%2FfGGaKclQWY0pca3f55D9tvXEfGCrcGzzXbqQDBof3emdzO3o04%2BhjuMqMciCPmJl%2Fxfupq5N%2BgGbZHh%2BD1VCATPdXybgSQwTytK75%2FAgVPB9VnrzpXoqeIjmYS1haqGu9NQw8O9NVHQcY9w%2Bjy7Qy8eMWtAI02v2Q83RweyVIgsmLImfKU1s16wiBr6cgKCPLmFNQ5dNebEmSL1dzk92HHLtJ4fDLNeXCYsOwJCN8rrjXvULb1u%2BWptzKAaFDFQS3LPR2IG3sG1LokBLaleHQozMKziPHs5odeB5bD2rpAWKzaIHAw7ENyra0CgjlLbGM2%2FGQTs7XEuRXCdIPDxDSJN8xcr2xpC2dt6%2B%2BC7BF4eTaicQ4bm1ICHTPZdr1MOLZmiWi5l134l78ypd8KCzaSw9zs6A%2Fe4O8kcILUBxRl5qcERtlvuKEmJT5UzAkcZupbSXKC4GYgQKi1D75WWI8TXEjvOlH3InIcVkagJMVxhuYpMTu7QtzT1PJHW%2FH44hV97zNuVqOhMsIto13FfdnadXiTwm4rpcrFR1K7WlP38TlaGA1itqixfzcbz3D0%2FBNLLvXXWtgdX1ibaJ%2FZAFoDVPHyo%2FLUYUmt8eD%2BGDMd5AflwsMI%2BrxckGOqUBkrU9EtAm0k2mSZD%2BtcAGXculwBqx3Ld1Zc0L9FspzW2eq%2FT7NhRBU40%2FgaoXv8M8sQfBH8VMIqT%2FxoBVxcZLhiBXdAn9GDUCpBbdayrXrIUlBSTaTD96GET9Eb6MjAefvLuoK3n3LMVJlKVo94dEXswwHjrQQATuXUQPoinpY%2Fk3fykmTzm7s5%2FSrPBLfN%2B6vqHennRUT3rlcqWwXRw6uKMz0Z75&X-Amz-Signature=37dc841b98581eb4319031d30fed8f91510cd6f6d40c4cd7d9b8afb6957f412d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

