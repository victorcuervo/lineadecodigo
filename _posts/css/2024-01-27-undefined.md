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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WCF5YUG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T141858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCICNwtWDoK057MIzQ8HITezwwn2e02vmNdV1fo6bR1%2FpoAiEAgYLuoPeBmDjOk2WDlGll5ncMUhd%2Ba6NMmAh4HNr7FPkq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDPLCqwIYvIEvupzhySrcAyqgCnuWQGT1I6N3RuOtI0Q5V2lE0Y5LQpcmseJNU5Id3y7diqD4zIpbB2FKwXfqA3WLb%2FYIjhc7KWotFTEj4O19IXjIV2XESxhfpm7yGgeqaT827RJOrfVy3AFxcw6bXiHU%2FBS4Q0tEwf9%2FCyTBJdE4NkY7aHJ6bEqFKcAJOCDN5IBVk1XC1CmLtfprYkr8tCQTJEhYbR3Rep%2B8V6i5xkmSDgPaWYF9gkaKy0kHDad9Qe3Da0hu0b64S36WdK4ZuQS2REpbC4YQLA8%2BdFg3z7CCMSV4GHPpKgpVZJ4n0VO6J762w7G5%2BLuimgZuaaBqt6m6KSHd5RWYI5BVP00o2965kMrt6aeLXi%2F7qPEClGzQjQXCLQOfvx4BcdelI9DM9UvKwFzcDViQOaaBAPSQPedH%2Fj8x7tIDXi9ILompmaABbyqUpLloIwjkTf%2BN2VMvZRutmOZQ7LEyi70d3Yrf3ojnpn%2FU%2F5TXyIz4q7%2B%2FM0KcL6MiuW7SQY1Mxb4TQhKQqzO7ZA%2FggYevqQznzG1jHPM2XXOWTbMYqTtL7tuqIXlDdGVLTMrH3sHWXWImkE%2FKLjXsSVeWI9aQhg0EuArFjgzhhSSESoeV1JKmxFBxx7WU9Dc5ma6z81%2Frta5YMKWJwckGOqUBfoKZOR2%2BRcNSQIzs806LrLlHSF8JXsWKIRV%2BHHCtlnPHsJMHYbSn9SEn7SVkbDFGzBF3Huf2w5LtF%2BQXBGZgDB0d%2FsigVZYUJ6ymfedfvFX7GRBo5JzT%2Fz3u%2F6okUqxfM0iN2t1Aku14U2%2Bv4v4OzaOjJ6xq19r5L8X64pXuDrwAPf1MaZm8P73hwKOjhgB7uBLpNesmQK8OpGK0GFom8Ouky7Yc&X-Amz-Signature=2b71c88d8d04107e45ac42f26660ef780c98fb9200f68ad049cf94f397cbfa2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WCF5YUG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T141858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCICNwtWDoK057MIzQ8HITezwwn2e02vmNdV1fo6bR1%2FpoAiEAgYLuoPeBmDjOk2WDlGll5ncMUhd%2Ba6NMmAh4HNr7FPkq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDPLCqwIYvIEvupzhySrcAyqgCnuWQGT1I6N3RuOtI0Q5V2lE0Y5LQpcmseJNU5Id3y7diqD4zIpbB2FKwXfqA3WLb%2FYIjhc7KWotFTEj4O19IXjIV2XESxhfpm7yGgeqaT827RJOrfVy3AFxcw6bXiHU%2FBS4Q0tEwf9%2FCyTBJdE4NkY7aHJ6bEqFKcAJOCDN5IBVk1XC1CmLtfprYkr8tCQTJEhYbR3Rep%2B8V6i5xkmSDgPaWYF9gkaKy0kHDad9Qe3Da0hu0b64S36WdK4ZuQS2REpbC4YQLA8%2BdFg3z7CCMSV4GHPpKgpVZJ4n0VO6J762w7G5%2BLuimgZuaaBqt6m6KSHd5RWYI5BVP00o2965kMrt6aeLXi%2F7qPEClGzQjQXCLQOfvx4BcdelI9DM9UvKwFzcDViQOaaBAPSQPedH%2Fj8x7tIDXi9ILompmaABbyqUpLloIwjkTf%2BN2VMvZRutmOZQ7LEyi70d3Yrf3ojnpn%2FU%2F5TXyIz4q7%2B%2FM0KcL6MiuW7SQY1Mxb4TQhKQqzO7ZA%2FggYevqQznzG1jHPM2XXOWTbMYqTtL7tuqIXlDdGVLTMrH3sHWXWImkE%2FKLjXsSVeWI9aQhg0EuArFjgzhhSSESoeV1JKmxFBxx7WU9Dc5ma6z81%2Frta5YMKWJwckGOqUBfoKZOR2%2BRcNSQIzs806LrLlHSF8JXsWKIRV%2BHHCtlnPHsJMHYbSn9SEn7SVkbDFGzBF3Huf2w5LtF%2BQXBGZgDB0d%2FsigVZYUJ6ymfedfvFX7GRBo5JzT%2Fz3u%2F6okUqxfM0iN2t1Aku14U2%2Bv4v4OzaOjJ6xq19r5L8X64pXuDrwAPf1MaZm8P73hwKOjhgB7uBLpNesmQK8OpGK0GFom8Ouky7Yc&X-Amz-Signature=2bfb589e948f86ac08ae2e2f6aa3c4d03f47fbeca020e4d1822e45b50a51cf57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

