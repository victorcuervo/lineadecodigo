---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MVQQTYX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T062555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgWU%2FE2j8nw0zLXg79wAl8fh8qnRtp0G7c8IlMgF%2FZdAiAudeHGp01p1ixzDM4X86n4Xd7Nl4B8yLd1Z%2BKd6fnbQCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoHc6Wb4cyOSVEIvqKtwDq3KqeDJvvwd8VujqE9kqLOqF5%2FUujR%2BlPKbOod9m2ShbI9ZDT3A4dQCd4uLRr8eWEcdn27bjNF6ne%2BHwqc88JiNCn3msTBgN2qF32QC00w81h26nwQxLuJljhjJJkw89fFTjuXmYrqSHGfv0WL7b42P26EjY3BxYf8gKgzg74ZuHJ7Y2qCYMR5ezIeknpKT%2B0LQd8c7Ea7t7czaM9bTmXx7DFGc1EV%2Ff2gXp%2FiVJuNlivMz6qaj6zgrJdy2KksOONlxHY57LuRShFQFf6VnHnV%2BNwFOzfvXihQYR6tkjdu%2BSmIZO94zJSGiWA4WJ78KPJz69JG%2FgpfOQLUW9uuYkbrNLFhFQq6TzAvRAv3yuYfxB2XfZ8gvFIxVzwPhdnh5FqEvC3EaCXKv6W7%2FXU5VRrw1RlECvn6xbbDDELKarZh3TBDx%2FVLcjNGXsDqYPh4yX2PN60m8zOrJEleKeprvR4opmm%2FdYKpTTsqkhd805cx4L2ydri%2FsoGmJ%2FaCLFqy1BOxOPSAUyRN%2B2kWdHUeHLx4V8DrYvlOc62liT4G1aOw4e31sGB%2BsU%2Fk%2BkLr9OArRMBXSbbWpG1VTTcsP9A8TkCMCUTftomj0KkPT1m%2FlwteREsIfQQvp2fhWY104wo9DZyQY6pgE5FdmrFdJNn6dmwumbqBYxvvRDWyCruSiNF9BPGVBojx3a0tfuZQQ5bsWXFX30HWICCg7js%2Bf7Kfg3fA6aq7ai3vof58%2BKvtpC9g4wCB%2F9MUc2Z9QLc4PtqcAoByd%2F0nZFb3bzhiSf9aNIk7cZI%2BaIKd9ZlTQwo%2Fnkph%2B%2Fwb3nRpTRlSBNRqSdnbnOMhxYxNB8clV8jqjxDyyxxXJAXaHfMGlpO0yI&X-Amz-Signature=ebdffb917348fa0a9503c7582b792e56ad9d586d78cb08a407ab8454186f5b9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MVQQTYX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T062555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgWU%2FE2j8nw0zLXg79wAl8fh8qnRtp0G7c8IlMgF%2FZdAiAudeHGp01p1ixzDM4X86n4Xd7Nl4B8yLd1Z%2BKd6fnbQCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoHc6Wb4cyOSVEIvqKtwDq3KqeDJvvwd8VujqE9kqLOqF5%2FUujR%2BlPKbOod9m2ShbI9ZDT3A4dQCd4uLRr8eWEcdn27bjNF6ne%2BHwqc88JiNCn3msTBgN2qF32QC00w81h26nwQxLuJljhjJJkw89fFTjuXmYrqSHGfv0WL7b42P26EjY3BxYf8gKgzg74ZuHJ7Y2qCYMR5ezIeknpKT%2B0LQd8c7Ea7t7czaM9bTmXx7DFGc1EV%2Ff2gXp%2FiVJuNlivMz6qaj6zgrJdy2KksOONlxHY57LuRShFQFf6VnHnV%2BNwFOzfvXihQYR6tkjdu%2BSmIZO94zJSGiWA4WJ78KPJz69JG%2FgpfOQLUW9uuYkbrNLFhFQq6TzAvRAv3yuYfxB2XfZ8gvFIxVzwPhdnh5FqEvC3EaCXKv6W7%2FXU5VRrw1RlECvn6xbbDDELKarZh3TBDx%2FVLcjNGXsDqYPh4yX2PN60m8zOrJEleKeprvR4opmm%2FdYKpTTsqkhd805cx4L2ydri%2FsoGmJ%2FaCLFqy1BOxOPSAUyRN%2B2kWdHUeHLx4V8DrYvlOc62liT4G1aOw4e31sGB%2BsU%2Fk%2BkLr9OArRMBXSbbWpG1VTTcsP9A8TkCMCUTftomj0KkPT1m%2FlwteREsIfQQvp2fhWY104wo9DZyQY6pgE5FdmrFdJNn6dmwumbqBYxvvRDWyCruSiNF9BPGVBojx3a0tfuZQQ5bsWXFX30HWICCg7js%2Bf7Kfg3fA6aq7ai3vof58%2BKvtpC9g4wCB%2F9MUc2Z9QLc4PtqcAoByd%2F0nZFb3bzhiSf9aNIk7cZI%2BaIKd9ZlTQwo%2Fnkph%2B%2Fwb3nRpTRlSBNRqSdnbnOMhxYxNB8clV8jqjxDyyxxXJAXaHfMGlpO0yI&X-Amz-Signature=7a97aa781c958a4fb1cff7d6b4ea13d7794703f65898225510eec28d66852f2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

