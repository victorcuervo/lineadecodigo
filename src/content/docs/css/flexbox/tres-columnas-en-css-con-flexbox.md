---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3R3XUXC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T165828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGF31EMV9o5NxAgnHji3B01tg%2B3%2Flr7WXKesE3MEJf1AAiAIFy2Ad5gKS3a6w7lvYACTLVtT0BYtrNkPQI5TdgoVuCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMUkmFdU%2B%2F9xLu%2Bh6oKtwDTLyf3vPwTtyqcix7i51OmOe4ON%2BtSumTcOGvnqrdCWn0ibxbid7UBkzrkfVdEuIE5IjicTDtDUIpCoVucehmGTneFzWLuyISsFbBbzm%2FCWmyD0DR4xiO1gxRw1rw9oJU3hdzOn%2BnqRJMnrkCv2xIX3VmMIaoujhLWU%2FibzuJazvkbGKXl%2F8VSaLBcIWwAyJyfgsCQVdQzfwRDxt5%2FeygIneAGH3h5kpPFRPtxJ%2Fx0gYGTkI5OhcCF18anJhhBcfIwLkwB60vV%2FcOskeUrIlwArAlvQhe1DJceb%2Fl4JrHoQAa6x7JIjbOrhf74anIS6A3SQ23CT6Stgjhg%2BzEn6WtMENj3qLaRS7UvW3NBAO%2FttJ9bQZqv%2FuhgB%2BSgk8WDUw4%2Fu9jGKUExtO6YFPtC58WZVowGb8qel6WUvGbRw2VLqTCdDO1r%2BzdETZwnvagp%2Brc%2BIcOxwzvfdCptPcWugQh6eLae5%2FGH7MLZQCOfcGqC0CuUJJhcWeF1QECp7cDofzOpxNtyHfHYFoGRvElTH85WP5wSu0EUXG5yimhtYoDbrGX02ujNpxYAkh7Fw6Od2UuwTZ0adKoiclPys6pe5UdEdo%2F7gW2ziW24X9AxYISl2yM3tD0Ned2tiQCJq8w6fDLyQY6pgFFgiRqGah6vX9Zt53nacOeGueygcbxRrvpWv1CglVn3oBErM6C5W7%2F9s7lTPwdIwiHiCicNLjq76hdzEO4IInZK9vLuB41naQ8sFgPgNw943Dz41CKOLfp1Okdel%2FrAgDU6%2FdJZBagqCh1eQipE5N5lgNs9eKzCqH28TDzM7PqR2MW%2B8rr4pvVaisJ5Pf8rsBxEVlN9LHX1lHSeH4kNYy6ySQ90V4g&X-Amz-Signature=7ec2bdacc6117624c974e8b7e702e8a1db9bde158c814a499de7ceae9e673d30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3R3XUXC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T165828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGF31EMV9o5NxAgnHji3B01tg%2B3%2Flr7WXKesE3MEJf1AAiAIFy2Ad5gKS3a6w7lvYACTLVtT0BYtrNkPQI5TdgoVuCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMUkmFdU%2B%2F9xLu%2Bh6oKtwDTLyf3vPwTtyqcix7i51OmOe4ON%2BtSumTcOGvnqrdCWn0ibxbid7UBkzrkfVdEuIE5IjicTDtDUIpCoVucehmGTneFzWLuyISsFbBbzm%2FCWmyD0DR4xiO1gxRw1rw9oJU3hdzOn%2BnqRJMnrkCv2xIX3VmMIaoujhLWU%2FibzuJazvkbGKXl%2F8VSaLBcIWwAyJyfgsCQVdQzfwRDxt5%2FeygIneAGH3h5kpPFRPtxJ%2Fx0gYGTkI5OhcCF18anJhhBcfIwLkwB60vV%2FcOskeUrIlwArAlvQhe1DJceb%2Fl4JrHoQAa6x7JIjbOrhf74anIS6A3SQ23CT6Stgjhg%2BzEn6WtMENj3qLaRS7UvW3NBAO%2FttJ9bQZqv%2FuhgB%2BSgk8WDUw4%2Fu9jGKUExtO6YFPtC58WZVowGb8qel6WUvGbRw2VLqTCdDO1r%2BzdETZwnvagp%2Brc%2BIcOxwzvfdCptPcWugQh6eLae5%2FGH7MLZQCOfcGqC0CuUJJhcWeF1QECp7cDofzOpxNtyHfHYFoGRvElTH85WP5wSu0EUXG5yimhtYoDbrGX02ujNpxYAkh7Fw6Od2UuwTZ0adKoiclPys6pe5UdEdo%2F7gW2ziW24X9AxYISl2yM3tD0Ned2tiQCJq8w6fDLyQY6pgFFgiRqGah6vX9Zt53nacOeGueygcbxRrvpWv1CglVn3oBErM6C5W7%2F9s7lTPwdIwiHiCicNLjq76hdzEO4IInZK9vLuB41naQ8sFgPgNw943Dz41CKOLfp1Okdel%2FrAgDU6%2FdJZBagqCh1eQipE5N5lgNs9eKzCqH28TDzM7PqR2MW%2B8rr4pvVaisJ5Pf8rsBxEVlN9LHX1lHSeH4kNYy6ySQ90V4g&X-Amz-Signature=d72c8a07c0490a789f073da8d3e53542366c9809f569641fddeb3de2cdf81b8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

