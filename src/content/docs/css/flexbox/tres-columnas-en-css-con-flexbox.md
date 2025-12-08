---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KXC2CJ5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T172637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDslkwRXfqDWvd8TfZlYgiDrgbTnGa5gj%2BcrMx%2BsZKOEwIhALJvTA2M0MnGISouiru7ZvIFIcMEPpqVRLkm%2B2bvuXtXKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzpaCzjCZty3fI%2BpYq3APnncw6rGCb5xxIKejCHpttHko9BvTn52%2BSQzPp5fJh1Dv4hnOhxAzUw1OA6cHN8%2FRzJsLL6F1%2FCy2MhgC4bvrJVF4x4b%2BpQi8DR8NhG%2FG0U4WzjC6XYNcLZHKmJwXKxXu%2Bh6bjpwUy%2FIMLfSCuwwd%2FNA58FzgpZBjdxwNqMHKdkJdVMfV0DZXZcqGVN7R0C4BTDdduVkI3efXbVMgkJnJa0QWtZq0YC3V93PjYI%2BO4AkstZel6MKOFfk3q%2FFno2mrC4C5LXAojrF1QT479dgMizJVIkyn2cI4Cb5rQfUJ8H1GXRUekEodaNUr2OPqFeIcUWX0n9EYLx33eqHdBPo7GCCflNZwIVnVQxWY5LYQGbDKWwArq1JMUa%2FTpiNflmjN3O5hhH2w8yFpSBxDUNMQ9N%2BRaxaoFKlwmmkWr4PX0EhETJ1fxsvElAwGyNdFCNeCmV4euSdF9eRrM1MEskXqI5q0LWB3aNKSxvf5oqPqYaW4onD3UJ3A33ibxNZXlRcnKebwrvCVnI4OXiQo%2FuciKcli7kFa%2F0OOdVwXQwpaOPT%2FN2J0JWfq9%2BXzJUke7u0hm8csmIIzPaDeiqPDFshHAtOtV78ZWRPENwvDGocx%2FCYWsio2SjNVpeLcsbzCHh9zJBjqkAQDzejugpZAFqasvT4WaXEf%2Fx5dJVCop%2FxzGi8UWCPZ%2F%2Fyw8RPZS%2Fq%2BS2D5G2T9CDAn39WYQc%2Fv4wdYBEK2ExyMFeG847kLb8dmUR6tYZZg1%2BKljpalTAx4zbtbjuM2ff0Hdu9O1eyqO9xWuYBeqqKA%2FSwlS9vvxYxRWeNS5Cko8ZeyYtIeDhPiNwiW1PqIN23tTRGqPYH99qhgrDaXIzlb8Ix78&X-Amz-Signature=9d60112da7f15c2c37699da081dc707f0c57ef7c794f32e00c691e6e297a1f01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KXC2CJ5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T172637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDslkwRXfqDWvd8TfZlYgiDrgbTnGa5gj%2BcrMx%2BsZKOEwIhALJvTA2M0MnGISouiru7ZvIFIcMEPpqVRLkm%2B2bvuXtXKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzpaCzjCZty3fI%2BpYq3APnncw6rGCb5xxIKejCHpttHko9BvTn52%2BSQzPp5fJh1Dv4hnOhxAzUw1OA6cHN8%2FRzJsLL6F1%2FCy2MhgC4bvrJVF4x4b%2BpQi8DR8NhG%2FG0U4WzjC6XYNcLZHKmJwXKxXu%2Bh6bjpwUy%2FIMLfSCuwwd%2FNA58FzgpZBjdxwNqMHKdkJdVMfV0DZXZcqGVN7R0C4BTDdduVkI3efXbVMgkJnJa0QWtZq0YC3V93PjYI%2BO4AkstZel6MKOFfk3q%2FFno2mrC4C5LXAojrF1QT479dgMizJVIkyn2cI4Cb5rQfUJ8H1GXRUekEodaNUr2OPqFeIcUWX0n9EYLx33eqHdBPo7GCCflNZwIVnVQxWY5LYQGbDKWwArq1JMUa%2FTpiNflmjN3O5hhH2w8yFpSBxDUNMQ9N%2BRaxaoFKlwmmkWr4PX0EhETJ1fxsvElAwGyNdFCNeCmV4euSdF9eRrM1MEskXqI5q0LWB3aNKSxvf5oqPqYaW4onD3UJ3A33ibxNZXlRcnKebwrvCVnI4OXiQo%2FuciKcli7kFa%2F0OOdVwXQwpaOPT%2FN2J0JWfq9%2BXzJUke7u0hm8csmIIzPaDeiqPDFshHAtOtV78ZWRPENwvDGocx%2FCYWsio2SjNVpeLcsbzCHh9zJBjqkAQDzejugpZAFqasvT4WaXEf%2Fx5dJVCop%2FxzGi8UWCPZ%2F%2Fyw8RPZS%2Fq%2BS2D5G2T9CDAn39WYQc%2Fv4wdYBEK2ExyMFeG847kLb8dmUR6tYZZg1%2BKljpalTAx4zbtbjuM2ff0Hdu9O1eyqO9xWuYBeqqKA%2FSwlS9vvxYxRWeNS5Cko8ZeyYtIeDhPiNwiW1PqIN23tTRGqPYH99qhgrDaXIzlb8Ix78&X-Amz-Signature=f57fe9ed534c2d34a5c5e8cf999c5cee4918cbb71d07a3f73eea1e9b557d68c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

