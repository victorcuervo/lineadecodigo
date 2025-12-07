---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROWIK3ZN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T060007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYPSw3VO2L8GqBq4p2qrb9X9P0gdF8dKackPoOQVDVvAiEAyn0shTRw5m8je4oFO3yP4mlP1k4Qa0CN7JUwwVrXjeEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB9cXTDvGluIYmlyMSrcAyPb%2FmyithHyt3mtXwE8opXMLjCQz6GKRjQ6t%2FwidreOrx2LNzN76KWRXyrwYp%2Ftq%2FiZgMyrjWnVApIQ%2FSZb9m33%2FZvKgYlRqJyNGIhPvhRZOnRGThQnsZgH8hoOlJxGv8vL5fC%2FV%2BQfgH%2Fj5JG5jeFGF87KbRVTd9g4EMmD6lyI7g62kg6EpZtzV%2FRHDmX4dc4tJ6O7lJjiIQtFOVNgqbQLklcybSf53kPP1PIMZFcfODW84%2FGdN5o8AZnIekGuaXtQUArT6n57mf0TRIhKZtPDlmLfgiPvZ5%2BZ3yEFPc3YVir7IJ69k6A%2B9veIqJXT3Z62mxqiRGKBf6G7xD0Svn%2FaZE99B8w7qFQ%2Fw%2F6XMPI9mk25h6mqBvquXTJr%2BrUpr6huER58nnLtDsmgiTdopA6Vsllv0PFd5VNG5kOWWLjjh%2Fb3H%2BDBqdJysUp6cMOX5JLunbmePCrP8Uq6%2BMeGXJSfvg7umRDercSdDEnCLIY4HmA3KR8gonPxX1n%2FtN770kSoYVJWJ%2F1OWHIowIkKW8L6zrp2wXimYZcEpv%2Fj5E6rZigWSX0OxrQBGy6jX8TGXuAfK28VAo0ffpb%2Ba96CHRQiyHvJqyAzWEwIS1svbQ%2FWMCqME4MZiiy5qc3TMPSZ1MkGOqUBwq11BwZkuFj7IOttSYUQG6BeQS6ntEFaudQX3atzP4RLy7k4G0gXblJNQY7JWGPVMC88EMkXkrnfwZsyTGZKYUTLIWHRoqGt23X2xqfSdOczDgjCuOC2LUg47TuDjpt1Ey4nx6Qz%2BBYkXeAhXDU3GCQB0%2B19CtrfunvVUnWhqjA2HsEkG0X8wAtAWr9itUXd1K8ZP9o8wHy7wpVfJPEdH1laXZDy&X-Amz-Signature=5b91534c85c0a0b8c4f3920f7fc08e8e9903e861faf9d7c5a062e90cfa4d8e2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROWIK3ZN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T060007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYPSw3VO2L8GqBq4p2qrb9X9P0gdF8dKackPoOQVDVvAiEAyn0shTRw5m8je4oFO3yP4mlP1k4Qa0CN7JUwwVrXjeEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB9cXTDvGluIYmlyMSrcAyPb%2FmyithHyt3mtXwE8opXMLjCQz6GKRjQ6t%2FwidreOrx2LNzN76KWRXyrwYp%2Ftq%2FiZgMyrjWnVApIQ%2FSZb9m33%2FZvKgYlRqJyNGIhPvhRZOnRGThQnsZgH8hoOlJxGv8vL5fC%2FV%2BQfgH%2Fj5JG5jeFGF87KbRVTd9g4EMmD6lyI7g62kg6EpZtzV%2FRHDmX4dc4tJ6O7lJjiIQtFOVNgqbQLklcybSf53kPP1PIMZFcfODW84%2FGdN5o8AZnIekGuaXtQUArT6n57mf0TRIhKZtPDlmLfgiPvZ5%2BZ3yEFPc3YVir7IJ69k6A%2B9veIqJXT3Z62mxqiRGKBf6G7xD0Svn%2FaZE99B8w7qFQ%2Fw%2F6XMPI9mk25h6mqBvquXTJr%2BrUpr6huER58nnLtDsmgiTdopA6Vsllv0PFd5VNG5kOWWLjjh%2Fb3H%2BDBqdJysUp6cMOX5JLunbmePCrP8Uq6%2BMeGXJSfvg7umRDercSdDEnCLIY4HmA3KR8gonPxX1n%2FtN770kSoYVJWJ%2F1OWHIowIkKW8L6zrp2wXimYZcEpv%2Fj5E6rZigWSX0OxrQBGy6jX8TGXuAfK28VAo0ffpb%2Ba96CHRQiyHvJqyAzWEwIS1svbQ%2FWMCqME4MZiiy5qc3TMPSZ1MkGOqUBwq11BwZkuFj7IOttSYUQG6BeQS6ntEFaudQX3atzP4RLy7k4G0gXblJNQY7JWGPVMC88EMkXkrnfwZsyTGZKYUTLIWHRoqGt23X2xqfSdOczDgjCuOC2LUg47TuDjpt1Ey4nx6Qz%2BBYkXeAhXDU3GCQB0%2B19CtrfunvVUnWhqjA2HsEkG0X8wAtAWr9itUXd1K8ZP9o8wHy7wpVfJPEdH1laXZDy&X-Amz-Signature=87248d7e181756936ba2ce7bb3a00be965b58b7b6a2ad200ce38a694e2dc0435&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

