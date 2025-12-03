---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGY7AT34%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T083358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQC%2FsLfHQM69rweW2xF6sT9IofBU%2FkboUO%2FhA%2B%2FuIwbCRAIhANIyMYOGHgyKxiFun%2Fky8VQajOTq14NcVVTdoZ2fnKr1Kv8DCCkQABoMNjM3NDIzMTgzODA1IgwgTYMHu7Lhrv5Tvvgq3APuqT%2F8G1hSqTyDfmqjReS7dtwyn9xSDVj%2B5js84Lv6f6KO%2Blh4%2Fwpsfg5rMxIAC1z6lTpkpHnUufYHR8s1WLf4bR7LCizXf1hg%2B81SHlsg5Y00kKI%2B8HETAvJSFca4d1aswO9M%2FPmD6j1RTuYMRU78pvojT1mbCz%2Bjk0%2FxQXrZBghkI3Q3OrqA34YG9oG7FMMBWlxGH8nJl8WMaihrm5FhBAtQmjqx7C95Tzc3%2F4qTEsCqhfuJMhZy2m2rTzJ3UQpAoXCQXKsm%2BzkyVC3sh%2FsuyRwDDX0cNCe8dY2ibahVl5L8%2FQLzf%2BJpyMrwxjD%2BJm7f1M7U5RYHY7fSwCpIJ19M2m7hiGnEGGx1RlA1yEh9DwKKCx6g3UuvfxqCrxe8OGmG1LDyrOnBc7McnqbtYrooo2Tv7bvZOkhZqo2HZ6exrbqvP30%2FlZjotlKLEI2Y8%2Fm5dOOr6FA0Txjo%2FPVm0wb9U%2BSiP9cId0cMGmvDDvPdNvziCW28U6DHxvS6ZMc4ynKaactHFY5OiT7aLT5EPcBBUT13igh%2BfbskYdUyVr17fBhom5su0dyd9uufgZ2lzHElwn84uxeJ73mXRJEXndAr9sQ2XVFOMz%2FpXfU6dMNiIW6A9e3TCOeYeywzXDDj1b%2FJBjqkAX%2B%2BPCN1SnbLBISDkmclDV7lUpDT24AjeoxC1tiCZ3HAlqx46AhiF4ueACiTQ3WJD3EVASTpnXyOfTyJUViOi1lKs8RvUE%2FxRjhkK6V1%2FH%2FFqZPZ4J8OJ1S6Ecsq88b0nQYkgeT9BLDH09ckW3iuqNykzoyLaDKZumnEziQ%2Bd3MvpAzqSe0ksm4suEUZJg4F2Ggo5wmgu6PdpOlAqAyyZ6lNQW8g&X-Amz-Signature=dccfa950babcf2a8b6663072b3f192c0a8698a30d15a0168ef4092289292263d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGY7AT34%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T083358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQC%2FsLfHQM69rweW2xF6sT9IofBU%2FkboUO%2FhA%2B%2FuIwbCRAIhANIyMYOGHgyKxiFun%2Fky8VQajOTq14NcVVTdoZ2fnKr1Kv8DCCkQABoMNjM3NDIzMTgzODA1IgwgTYMHu7Lhrv5Tvvgq3APuqT%2F8G1hSqTyDfmqjReS7dtwyn9xSDVj%2B5js84Lv6f6KO%2Blh4%2Fwpsfg5rMxIAC1z6lTpkpHnUufYHR8s1WLf4bR7LCizXf1hg%2B81SHlsg5Y00kKI%2B8HETAvJSFca4d1aswO9M%2FPmD6j1RTuYMRU78pvojT1mbCz%2Bjk0%2FxQXrZBghkI3Q3OrqA34YG9oG7FMMBWlxGH8nJl8WMaihrm5FhBAtQmjqx7C95Tzc3%2F4qTEsCqhfuJMhZy2m2rTzJ3UQpAoXCQXKsm%2BzkyVC3sh%2FsuyRwDDX0cNCe8dY2ibahVl5L8%2FQLzf%2BJpyMrwxjD%2BJm7f1M7U5RYHY7fSwCpIJ19M2m7hiGnEGGx1RlA1yEh9DwKKCx6g3UuvfxqCrxe8OGmG1LDyrOnBc7McnqbtYrooo2Tv7bvZOkhZqo2HZ6exrbqvP30%2FlZjotlKLEI2Y8%2Fm5dOOr6FA0Txjo%2FPVm0wb9U%2BSiP9cId0cMGmvDDvPdNvziCW28U6DHxvS6ZMc4ynKaactHFY5OiT7aLT5EPcBBUT13igh%2BfbskYdUyVr17fBhom5su0dyd9uufgZ2lzHElwn84uxeJ73mXRJEXndAr9sQ2XVFOMz%2FpXfU6dMNiIW6A9e3TCOeYeywzXDDj1b%2FJBjqkAX%2B%2BPCN1SnbLBISDkmclDV7lUpDT24AjeoxC1tiCZ3HAlqx46AhiF4ueACiTQ3WJD3EVASTpnXyOfTyJUViOi1lKs8RvUE%2FxRjhkK6V1%2FH%2FFqZPZ4J8OJ1S6Ecsq88b0nQYkgeT9BLDH09ckW3iuqNykzoyLaDKZumnEziQ%2Bd3MvpAzqSe0ksm4suEUZJg4F2Ggo5wmgu6PdpOlAqAyyZ6lNQW8g&X-Amz-Signature=1472ebeff29310f7628b5964f891da12f6b2e22eaab34cde493ff48692f29925&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

