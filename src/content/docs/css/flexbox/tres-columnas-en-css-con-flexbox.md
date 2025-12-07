---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNG4R27N%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T185658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrC%2BvPKAUaZJx5ePW2c7ddwb2Dn8CUWjRU0PhtpqaL8AiEA6SCtao4IFSm%2FCDdBq8uhBimAuiuwDFX%2FYwNzVTuSgeEqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK975J0sfXb2m4wl%2BCrcA5LSr7WDib3kBu7HLgMs47A6XgZxKcH%2Bh1TL%2FasOwrf9zmFDRKkYVGOgCSmpRSgyMRuoNc7xCaoJJ4K2Im6PHeBCcWPxos3TBMTYO5DmeXZ9kYDy1hV01qw%2BTy2%2FCDkE4E6kehNEIvHzFqZOshPBMc7pYgXRSt9CP02BUWoP1Ux9pHt9Sfy8GZg7NaZlrGR5q8b8GC5fekVKt87GGHHQqBCicXlsG5YY%2FRvZZLsvIV3pGayqX9tA%2BUfJ63T%2FBCypeqFb4FwuSIk0RSWcr8F7mzIajo%2BJdK%2FRAMx3fiAu7YXqYgXUFc4xuy3iBWMh3bi9198DPphPs9MiZP46Y%2BHIs%2FdBBtFXK3VO2lGE%2BOkJP%2BJLJaBjquNipoFhilGoFsZkdfxNgS1UfhYL32zxbyCsh24TRe7fnuuI3ixavTDeMGmzjXrjYjQNTZF0OzFIwy56%2FS%2BVmeNBstmo%2F%2BBT4Wnk5JX8hVp2k038LL6EIRz1tHdGH4DCcqxcS99OeZ58UqBmG1h0kJ%2ByOutBj%2BQhphu0HVVh2%2FuJup9u7xCit%2BLXDmMnEYr6ujB%2FzAusWnba4BfiNHKkffLwHXfIGGZxJYdcZvijG1XkavnW0W39kS%2FgecAEw7Z9Cg9v0Sgr2JP2MP2%2F1skGOqUBcFMI7c2Fo3ftoI9%2BY%2BqP0g7uecGpi7QaV0xdnpwIpbSzUEvQii4wujZUxWzArT9JdNYwFWemsaEHgAgnIKE6tohHrP9gjiDfhq%2FQADKaakOgNV79a6PyZVrf0DyvEA8Puzo7ke32AVPw%2B58b1mZa1J7WIJ%2FUCBXHrD2J8dm0oyFECi2r2cJUJsju5IRg6pqegLyAlW%2BBaePK%2FBhcgociTT4SvwDf&X-Amz-Signature=5d62766a95f3cd9cfd1bb2fd7455d94ec933e68060d23ffdea66907ea35068a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNG4R27N%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T185658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrC%2BvPKAUaZJx5ePW2c7ddwb2Dn8CUWjRU0PhtpqaL8AiEA6SCtao4IFSm%2FCDdBq8uhBimAuiuwDFX%2FYwNzVTuSgeEqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK975J0sfXb2m4wl%2BCrcA5LSr7WDib3kBu7HLgMs47A6XgZxKcH%2Bh1TL%2FasOwrf9zmFDRKkYVGOgCSmpRSgyMRuoNc7xCaoJJ4K2Im6PHeBCcWPxos3TBMTYO5DmeXZ9kYDy1hV01qw%2BTy2%2FCDkE4E6kehNEIvHzFqZOshPBMc7pYgXRSt9CP02BUWoP1Ux9pHt9Sfy8GZg7NaZlrGR5q8b8GC5fekVKt87GGHHQqBCicXlsG5YY%2FRvZZLsvIV3pGayqX9tA%2BUfJ63T%2FBCypeqFb4FwuSIk0RSWcr8F7mzIajo%2BJdK%2FRAMx3fiAu7YXqYgXUFc4xuy3iBWMh3bi9198DPphPs9MiZP46Y%2BHIs%2FdBBtFXK3VO2lGE%2BOkJP%2BJLJaBjquNipoFhilGoFsZkdfxNgS1UfhYL32zxbyCsh24TRe7fnuuI3ixavTDeMGmzjXrjYjQNTZF0OzFIwy56%2FS%2BVmeNBstmo%2F%2BBT4Wnk5JX8hVp2k038LL6EIRz1tHdGH4DCcqxcS99OeZ58UqBmG1h0kJ%2ByOutBj%2BQhphu0HVVh2%2FuJup9u7xCit%2BLXDmMnEYr6ujB%2FzAusWnba4BfiNHKkffLwHXfIGGZxJYdcZvijG1XkavnW0W39kS%2FgecAEw7Z9Cg9v0Sgr2JP2MP2%2F1skGOqUBcFMI7c2Fo3ftoI9%2BY%2BqP0g7uecGpi7QaV0xdnpwIpbSzUEvQii4wujZUxWzArT9JdNYwFWemsaEHgAgnIKE6tohHrP9gjiDfhq%2FQADKaakOgNV79a6PyZVrf0DyvEA8Puzo7ke32AVPw%2B58b1mZa1J7WIJ%2FUCBXHrD2J8dm0oyFECi2r2cJUJsju5IRg6pqegLyAlW%2BBaePK%2FBhcgociTT4SvwDf&X-Amz-Signature=7b3c835b8d66428373f68c4f57ea218a961832656bb2778a806d6f0eb0e116d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

