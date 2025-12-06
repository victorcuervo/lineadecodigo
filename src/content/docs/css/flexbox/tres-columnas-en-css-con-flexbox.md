---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ZWNMFB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9HxY8tOJaG6x0QGYZJU6ALCg1tcm7w5lTNNTNDeEojAiEA7hcWUeVWVXwPSJWkCQZ96YwbgEztA2UVKUbzvX5d8SEq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDKZIk7uqxtm9g%2FOENircA%2BuGUuPaLF5au3vMYtg4hF2ourW%2FA8ctExpif8ds1k%2BTIhMhhQEHV%2FM%2BOtxloXNG7qPIHykjL0LtdxryFyi4sZU%2FR26A9s3dYEt%2BSdRWdgBx5fNmHIB0q2GMq7yKPmqmR9d8U%2FuG0QdlbLuoJMo3Dj9CUzHSQCaJ%2FTZ6Tm9%2BOLDTuzk4PzeOMgfz2il7FJghSd4FRhRVHOeWiaRUd%2B92nr9fxL7PX931F7S7BYKEQ1wo0TbKDxvYzgDKCBfhSRcgomxCXPj%2FgF%2BhMf7ZW2zv25%2FWzEdhxI3sCpkU79PnhnSw2DWMrJVzKlol%2FawXRMszNUev9gvPJMudHTYUUaQNOFht8U06gkpvQ4yb%2F7n5SHVDymrdYi07sIFKIO5inQXaydL5DqRgIpEe2MDhhtijAPLjVN8CCkS1YQms0r7PlAxvNHuAitWpGmyo6kHn9dA%2FhY7gYWsMn3ysYuGmpD66udonY6bnyjB%2BQAeP7yeAi9adzvuF9Ud8lCDdhMo4tLCeaggeYaYn%2B2RQyyTwSehw9n7gyEIjH6SblKHrFwGqmoc7N9L0RijDz7KtG5GephJaGhHU%2FzLYUBmUP%2FpzdXWV1AnXTPqePAtNsCs4vpz4Jy6ttMR9oO0P2fYZ8OWKMOmnzskGOqUBVfX37u7AbBzmH4a0kydS96Kj4%2B8BRJSjF0%2F%2F6QHWS4pq0wZXjiu1Kf4PNAlo4NHkkbNhGJXU9grjjVMcbWccQYfuoiE572afW5qeBiAC7QNZAillu%2Bu7TfrmZV9uHt4iLX7MOP1ndI7Vq7sYM8iRMCpvvgS%2BWH3JGKSpoEtYTC2USXaXBJdvWphNsmEyy3xuap%2BCmjDG%2B0oFFS7s3cTIE%2B34Qy0u&X-Amz-Signature=e4de84ecc9e1f3e4f276ad69e19905391d77519b563bd49a9f3114b78e9e3c4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ZWNMFB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9HxY8tOJaG6x0QGYZJU6ALCg1tcm7w5lTNNTNDeEojAiEA7hcWUeVWVXwPSJWkCQZ96YwbgEztA2UVKUbzvX5d8SEq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDKZIk7uqxtm9g%2FOENircA%2BuGUuPaLF5au3vMYtg4hF2ourW%2FA8ctExpif8ds1k%2BTIhMhhQEHV%2FM%2BOtxloXNG7qPIHykjL0LtdxryFyi4sZU%2FR26A9s3dYEt%2BSdRWdgBx5fNmHIB0q2GMq7yKPmqmR9d8U%2FuG0QdlbLuoJMo3Dj9CUzHSQCaJ%2FTZ6Tm9%2BOLDTuzk4PzeOMgfz2il7FJghSd4FRhRVHOeWiaRUd%2B92nr9fxL7PX931F7S7BYKEQ1wo0TbKDxvYzgDKCBfhSRcgomxCXPj%2FgF%2BhMf7ZW2zv25%2FWzEdhxI3sCpkU79PnhnSw2DWMrJVzKlol%2FawXRMszNUev9gvPJMudHTYUUaQNOFht8U06gkpvQ4yb%2F7n5SHVDymrdYi07sIFKIO5inQXaydL5DqRgIpEe2MDhhtijAPLjVN8CCkS1YQms0r7PlAxvNHuAitWpGmyo6kHn9dA%2FhY7gYWsMn3ysYuGmpD66udonY6bnyjB%2BQAeP7yeAi9adzvuF9Ud8lCDdhMo4tLCeaggeYaYn%2B2RQyyTwSehw9n7gyEIjH6SblKHrFwGqmoc7N9L0RijDz7KtG5GephJaGhHU%2FzLYUBmUP%2FpzdXWV1AnXTPqePAtNsCs4vpz4Jy6ttMR9oO0P2fYZ8OWKMOmnzskGOqUBVfX37u7AbBzmH4a0kydS96Kj4%2B8BRJSjF0%2F%2F6QHWS4pq0wZXjiu1Kf4PNAlo4NHkkbNhGJXU9grjjVMcbWccQYfuoiE572afW5qeBiAC7QNZAillu%2Bu7TfrmZV9uHt4iLX7MOP1ndI7Vq7sYM8iRMCpvvgS%2BWH3JGKSpoEtYTC2USXaXBJdvWphNsmEyy3xuap%2BCmjDG%2B0oFFS7s3cTIE%2B34Qy0u&X-Amz-Signature=28f1e04be06e184a5d0f2549626ee5e70f6327e765911eb07bc853cce5ac91e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

