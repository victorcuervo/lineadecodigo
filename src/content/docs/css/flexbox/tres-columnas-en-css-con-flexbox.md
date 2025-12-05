---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWI67HTO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T101636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDASSG2USdMjp2Eb2dQFtDbqzVHQxxqusL7bIGQ5%2BNosgIgPk9zDN30LGWhb0BiRsruryw8CxTc20tUYy1yVqnP9P0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDIkQpt%2FT6OCWsEvnUCrcA0PJxQEHkbSy21gyk9%2F6PFeSe2tjMe%2FYbf9l6J1a%2Bs9X3G2FHb6CgDi8MV%2BxBV3iZkhkuSb2Uu27cMUc%2FyHEQ8NgdM%2FJXtJLwHql2SdV68U1n%2FAni52MRwg%2FgtvBh7eI6d1nHNtJKvVJIYuzSEozgBo1jrx%2B4awCwia0xVW36mlO0gtF5VF4ku%2BNdK5W9NQZhoql%2BH08BP%2BfuYK8Qo%2F0c9FA9fkd3equgXj0NiL25o6CcBuZYEyZzkgiYS526xiVTzrMYnHE709FWCWZD5aXFaTJ0gVWmOnLzK03BJgXSkMT8Uzd%2Fn58vGOstWVCUj%2BAGlnS817ugeAZN9nLGFadCuYpYvDrHLQz2tBeSSF2IZheDzmnQOYCpbzeQ3jQB9nreJJJXU7S6RUo1UiZREnqk35JEVPZlDMdXC7ODWKlnoqQCY%2BDZstf%2Figd9lTBHHviRh9XwJC6nWtonpj%2FDbc%2BTYFwW7yi8sGOX9WP%2FP192Fup57WByBuqyo2YpEvZwjzN8CVIKnm34OjAEKbTe5VeveG4HlBFhPqTdlpxm5sUP9xHuij7QFp3vRNBq0565s3zsPjE4HooEVIcnTZNWCBhzVUeXrbVbVcoyhri7gNX08NLMcA%2FkyA6LPucurJPMIfJyskGOqUBMDhbd3%2FZpPgAvLH4W3HxWYJe63h3cEJxjiw1gIBZhm1P54VKFBTakjALoVj5%2B5tFHMfIwyIxoeru6N6PWhIt3yrrUo%2BxBOo5nSslAyjZFYktz%2BG2SWu%2FmNsIURSJAahed%2BM4GMtwshoOfBv3ALQMNsJwcfnQ%2BBgYLRxqdh4s%2BldRiOMkF8AKX5V4bMzh2yZMeJoBmnGwgQo9Tpug0ReZ4ScmK%2FSI&X-Amz-Signature=ab415ddeeff56482a4b2a9284137f8598b31f3e7c2bec7c796b0efcb89b1cb69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWI67HTO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T101636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDASSG2USdMjp2Eb2dQFtDbqzVHQxxqusL7bIGQ5%2BNosgIgPk9zDN30LGWhb0BiRsruryw8CxTc20tUYy1yVqnP9P0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDIkQpt%2FT6OCWsEvnUCrcA0PJxQEHkbSy21gyk9%2F6PFeSe2tjMe%2FYbf9l6J1a%2Bs9X3G2FHb6CgDi8MV%2BxBV3iZkhkuSb2Uu27cMUc%2FyHEQ8NgdM%2FJXtJLwHql2SdV68U1n%2FAni52MRwg%2FgtvBh7eI6d1nHNtJKvVJIYuzSEozgBo1jrx%2B4awCwia0xVW36mlO0gtF5VF4ku%2BNdK5W9NQZhoql%2BH08BP%2BfuYK8Qo%2F0c9FA9fkd3equgXj0NiL25o6CcBuZYEyZzkgiYS526xiVTzrMYnHE709FWCWZD5aXFaTJ0gVWmOnLzK03BJgXSkMT8Uzd%2Fn58vGOstWVCUj%2BAGlnS817ugeAZN9nLGFadCuYpYvDrHLQz2tBeSSF2IZheDzmnQOYCpbzeQ3jQB9nreJJJXU7S6RUo1UiZREnqk35JEVPZlDMdXC7ODWKlnoqQCY%2BDZstf%2Figd9lTBHHviRh9XwJC6nWtonpj%2FDbc%2BTYFwW7yi8sGOX9WP%2FP192Fup57WByBuqyo2YpEvZwjzN8CVIKnm34OjAEKbTe5VeveG4HlBFhPqTdlpxm5sUP9xHuij7QFp3vRNBq0565s3zsPjE4HooEVIcnTZNWCBhzVUeXrbVbVcoyhri7gNX08NLMcA%2FkyA6LPucurJPMIfJyskGOqUBMDhbd3%2FZpPgAvLH4W3HxWYJe63h3cEJxjiw1gIBZhm1P54VKFBTakjALoVj5%2B5tFHMfIwyIxoeru6N6PWhIt3yrrUo%2BxBOo5nSslAyjZFYktz%2BG2SWu%2FmNsIURSJAahed%2BM4GMtwshoOfBv3ALQMNsJwcfnQ%2BBgYLRxqdh4s%2BldRiOMkF8AKX5V4bMzh2yZMeJoBmnGwgQo9Tpug0ReZ4ScmK%2FSI&X-Amz-Signature=874a4184fe15a4d87b2291f24c9ce3f0ad3ef833c9c741e4db047b9c24f7aa95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

