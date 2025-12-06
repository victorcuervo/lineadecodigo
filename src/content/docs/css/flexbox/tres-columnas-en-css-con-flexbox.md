---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNPENNWK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T071747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMfI4P6AdliZwZ5XAXPo7jsdsSz42qStO2jeMpl3cW4AiB%2BhYpgDLX39rIKGiCvHdh84xOhrLtpkA2aWmXC0N0VByr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMvREA2fKWjeB7itqZKtwDlWr1%2FXWqyGnnXAQYpDQUoXmb1vKAC6YOmCzljHWq6QqBaEH9pFygYzOohFVEUBZjdxIcdVNdsXkf5wQf7FCYbx5XPRijmtXjHWVSND%2BZIrk0WhQ69HTSHM5nBOOjNu8s0DsREYN96uDDYHqLuiadZ8b8WK85GPaYS5jgRC7aaXSi0dBwVEyO3ZPyNUXvIeUnHCAISl%2FI9Cyebrn9M24yPZ8c3PHXgdbJwkMrXujehKUSJ1JV%2BtGRv9kay4N9aK8wFvh19jGSaEbUy2%2FkNobfjZs3mYbS1P2z%2FL2agd%2Bh%2F051m2beYliEHBHhYJOeROoAK4e8POlpmLs9HTorm8kNwYqL3m4Xin7iXuMbTmtMzAysNAGPV2ij0VA47InhyvKBUq6cLGUBpWWAsyKf%2FwUAsUs1i7Wd2EuWMCfanM79lRJ25ADTmd2SYkfihWVhiVcAX0AED1dthESM7KlpFSa0Ab0tG%2BDe2%2B1HGDS1hsld9QNke4vH3xg3kDeoVO9u2zRK5%2FPpYVkrvUwreMeHyGR1yWkngVZB3Rfdo%2Bz8Dy3Nq4AIlcwiuZ9I9kKwY8SvKjpQ4YkEbvKx7D%2BHQvqZoMSgRLNtwbj4MF1nFbYGZamhN%2Bl6Gs0%2BNzXFplTA6D0w1p7PyQY6pgGRXpu%2BApQHvuh1xRNdfL%2FVmhF6lP0vzVglslNGr%2BIBLp0pwluROWrQ99cagBy0kkiDAuVNC%2BVVOZ6Jzh%2Fg%2F9Zw6MIDnbE3hXPZ6uZnIvJ2%2FMNIHweH0GGsnUo62iOgwcTQ1c9klzEhx1z6rWulAEd5uvmU7c6dVuWr3ckWU%2B65wB52OjcwWNPH4%2FG%2FMOj9vlYB5NGL2IX%2BpH6f5kI7MAx0P8jLnhoj&X-Amz-Signature=8d5716fbafec6f60aff974e3dc3b45e80e7672c4c28c504d08abed59226ca694&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNPENNWK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T071747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMfI4P6AdliZwZ5XAXPo7jsdsSz42qStO2jeMpl3cW4AiB%2BhYpgDLX39rIKGiCvHdh84xOhrLtpkA2aWmXC0N0VByr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMvREA2fKWjeB7itqZKtwDlWr1%2FXWqyGnnXAQYpDQUoXmb1vKAC6YOmCzljHWq6QqBaEH9pFygYzOohFVEUBZjdxIcdVNdsXkf5wQf7FCYbx5XPRijmtXjHWVSND%2BZIrk0WhQ69HTSHM5nBOOjNu8s0DsREYN96uDDYHqLuiadZ8b8WK85GPaYS5jgRC7aaXSi0dBwVEyO3ZPyNUXvIeUnHCAISl%2FI9Cyebrn9M24yPZ8c3PHXgdbJwkMrXujehKUSJ1JV%2BtGRv9kay4N9aK8wFvh19jGSaEbUy2%2FkNobfjZs3mYbS1P2z%2FL2agd%2Bh%2F051m2beYliEHBHhYJOeROoAK4e8POlpmLs9HTorm8kNwYqL3m4Xin7iXuMbTmtMzAysNAGPV2ij0VA47InhyvKBUq6cLGUBpWWAsyKf%2FwUAsUs1i7Wd2EuWMCfanM79lRJ25ADTmd2SYkfihWVhiVcAX0AED1dthESM7KlpFSa0Ab0tG%2BDe2%2B1HGDS1hsld9QNke4vH3xg3kDeoVO9u2zRK5%2FPpYVkrvUwreMeHyGR1yWkngVZB3Rfdo%2Bz8Dy3Nq4AIlcwiuZ9I9kKwY8SvKjpQ4YkEbvKx7D%2BHQvqZoMSgRLNtwbj4MF1nFbYGZamhN%2Bl6Gs0%2BNzXFplTA6D0w1p7PyQY6pgGRXpu%2BApQHvuh1xRNdfL%2FVmhF6lP0vzVglslNGr%2BIBLp0pwluROWrQ99cagBy0kkiDAuVNC%2BVVOZ6Jzh%2Fg%2F9Zw6MIDnbE3hXPZ6uZnIvJ2%2FMNIHweH0GGsnUo62iOgwcTQ1c9klzEhx1z6rWulAEd5uvmU7c6dVuWr3ckWU%2B65wB52OjcwWNPH4%2FG%2FMOj9vlYB5NGL2IX%2BpH6f5kI7MAx0P8jLnhoj&X-Amz-Signature=b0e36a63bee6f7887a506c3c97270462d4779930d9993c94d2bcfa3bb1216911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

