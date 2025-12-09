---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PPU5VGG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T021440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXuDe6Teq2JiieIzaEgQK%2FHt3j8S9zj1qqbiEWZYx1vgIgbZ%2FGm55j1aZQpDCAq5A%2BHzuL1idUPBFn5XnE0em%2BrhcqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArFsEBgdiAnOmdqBircAxRps0Q9G3djykxYuzDL5XyLZ8ZSrcA40lscGFq7xjoRJG5GGkacF6X2i6Ip2wmZtWPv2%2B7r%2B4onMWel28KakmtsRYOtLsyRM%2FJNfQwL7tHA5FvhO0oiHf3G5sknkyWPuqkBTji7o4GGOKjA18vuKmWg%2BwO60xggVGwOS6LcBTsEysoNtNT%2BaZSCpatof2dUZmAnJEng%2FL3%2FxsDWXdwSomDKvv20GPIZDMGSfzDQ64LbECEhKAWR2J%2BTB4oLqiaK07x1hmdavSb0VNtQ%2FYltQpu9fH4RLXDga9uPBMnuINL6Z7PEKcI1ojOOijgqal27xmH1mK%2Fm%2FKEsPhp4jGH3ye%2B1GE6YGnEO6PswrdABUtXClprcP7v2A1A%2BED29qXysH%2FQervOOF%2FUwwb12ZumbH1y36KLYIn8L%2B%2BhKtyN0Ykk3dOXg5LbubOp6fwMYYpB1iJZRvGpxO%2FE1%2BKaRS1%2FXZHOIMMly2RH7QqI2kiCGJsj6Ed9dyDfAZaapuOi5tOlrnvy0hUe4zOTyao0u6BptPYh8fF%2BVcZurELYZYY4k43GPFZfhQhr8VlHlmAOxyrvDk3V6bscSvY79TmMfn9KoNEz361ory8AIWn1aUYf760ejUi2CYtCqqrqPS2gCML3y3ckGOqUBhnnLgM0meZwCyLlKUdzgaSNgCgL%2BZ3V93vyoxbVZB8oAh92rLcy9xLpEZ8i%2FedGsfFQAE%2F0bf0y7WRFtzeuVjX8urY93fwsvUdRFTfnrQ6Sp5FBhxRQAVilwVmyXsL5qSIK6vfWEWwTFn1N5yF4u9km73Teyz6WeHEqUa5vbgJbiok5jy98VQ4iDzoYnvOCVUzml88zGEpCTItRmcJ2fpNP6Jh5q&X-Amz-Signature=aa24e69d86dbc5fe14c77bde63904e2768071f21de5d33165cc530d5a9a403d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PPU5VGG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T021440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXuDe6Teq2JiieIzaEgQK%2FHt3j8S9zj1qqbiEWZYx1vgIgbZ%2FGm55j1aZQpDCAq5A%2BHzuL1idUPBFn5XnE0em%2BrhcqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArFsEBgdiAnOmdqBircAxRps0Q9G3djykxYuzDL5XyLZ8ZSrcA40lscGFq7xjoRJG5GGkacF6X2i6Ip2wmZtWPv2%2B7r%2B4onMWel28KakmtsRYOtLsyRM%2FJNfQwL7tHA5FvhO0oiHf3G5sknkyWPuqkBTji7o4GGOKjA18vuKmWg%2BwO60xggVGwOS6LcBTsEysoNtNT%2BaZSCpatof2dUZmAnJEng%2FL3%2FxsDWXdwSomDKvv20GPIZDMGSfzDQ64LbECEhKAWR2J%2BTB4oLqiaK07x1hmdavSb0VNtQ%2FYltQpu9fH4RLXDga9uPBMnuINL6Z7PEKcI1ojOOijgqal27xmH1mK%2Fm%2FKEsPhp4jGH3ye%2B1GE6YGnEO6PswrdABUtXClprcP7v2A1A%2BED29qXysH%2FQervOOF%2FUwwb12ZumbH1y36KLYIn8L%2B%2BhKtyN0Ykk3dOXg5LbubOp6fwMYYpB1iJZRvGpxO%2FE1%2BKaRS1%2FXZHOIMMly2RH7QqI2kiCGJsj6Ed9dyDfAZaapuOi5tOlrnvy0hUe4zOTyao0u6BptPYh8fF%2BVcZurELYZYY4k43GPFZfhQhr8VlHlmAOxyrvDk3V6bscSvY79TmMfn9KoNEz361ory8AIWn1aUYf760ejUi2CYtCqqrqPS2gCML3y3ckGOqUBhnnLgM0meZwCyLlKUdzgaSNgCgL%2BZ3V93vyoxbVZB8oAh92rLcy9xLpEZ8i%2FedGsfFQAE%2F0bf0y7WRFtzeuVjX8urY93fwsvUdRFTfnrQ6Sp5FBhxRQAVilwVmyXsL5qSIK6vfWEWwTFn1N5yF4u9km73Teyz6WeHEqUa5vbgJbiok5jy98VQ4iDzoYnvOCVUzml88zGEpCTItRmcJ2fpNP6Jh5q&X-Amz-Signature=8811ff3aedfba6fec9d01f0fb5becb758df1297da4440ec65d606f232b1d6d30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

