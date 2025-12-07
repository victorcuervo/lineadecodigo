---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4K6EQVM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T153719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7DRZiJiwTH3BG%2BD34S77bcFX6RS%2FQQIjCFOXEeTSNAAIhALPyp8nZTMEB2t1vcgZGqTv5Et3Pd%2F2eVSa6111Xv683KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwt8CBNUgMuyW9ari8q3AOmwUxEnvfvKUEgYpHruUHTmOkvaSqQS%2FebFtlNmJTjVqM4COmMEo%2FmORrw0Mf%2BbE05bmULXHCcWPwgCz%2FVIZH%2FROZU8C1JZzxu1bwaqD00lnKgWGPuWD9sGly9hppWMqpw%2FSXxjTCeVIlGxn72R4ZnrwL55BVWz%2F%2F3MQW5ywVQmCUcypg3kxYN5QZah039RBghOSIzmM6TZZeGwq5EqnMJZOeB%2F%2BE36qBzwNZNxvNoaRq9E%2F801i23qzGMN%2Fv6RJX0XA06ExHCpBLTSCkGWXzrTKpVvhhdyynKase7st6BhedWuvOZiT88SE1nk5u1QEXlB5VXPZBLVlWi3j5bj3aFwFLixOYBClVm9VGPXeCyecO79wTWIpWGMbzrkuvlWAvT3j45nOUnfYMHu3%2BHrC5sU%2FwQPX%2FTM6xNn6sFaGYbXmAp9qW0vcKhTL4Lyb07DSVWkbmQsnN6C4isP8w8533LgzhItHo1QCpoUsluznXwhWtodPwVwVwf6uGcXii3e3kxUEKWsUS2vWK2Lmb0hcYj1oZuiR5P%2FAr61fF1Wr6HwXa%2F8%2BEDklHrE3VgqZNSYKtpkf%2BFtNbA8wchcoe09D1wKQpfSkTok%2F8Anub85uLouCfn1d3Qi4%2FNU8PcvzC%2BmtXJBjqkATpCCUxfrZvZbTqhgpmGrlavMFQzbton6k5x68Z1DRPP0J7NwmUJ%2F%2BSxmpMxyfCZRYHwhDAMS1tYOLQCNstpD5%2Ba3qEtNKgKBWmA1NL6OkdzDS6DAayqK4kGxglM%2B9uPfUZJajz0uo8upzrHuWPyDDntzjvp5pOykmjmhim4ftXoTmdLhRev1L%2FoQ8%2BireU%2Fz6ABrS%2BXu9KhLuMGE9KXc6Mr4duV&X-Amz-Signature=be04533e44d54eb85aacb4a20b54ee068d9c6a8d07435ba1e1a2f5bd25864341&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4K6EQVM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T153719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7DRZiJiwTH3BG%2BD34S77bcFX6RS%2FQQIjCFOXEeTSNAAIhALPyp8nZTMEB2t1vcgZGqTv5Et3Pd%2F2eVSa6111Xv683KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwt8CBNUgMuyW9ari8q3AOmwUxEnvfvKUEgYpHruUHTmOkvaSqQS%2FebFtlNmJTjVqM4COmMEo%2FmORrw0Mf%2BbE05bmULXHCcWPwgCz%2FVIZH%2FROZU8C1JZzxu1bwaqD00lnKgWGPuWD9sGly9hppWMqpw%2FSXxjTCeVIlGxn72R4ZnrwL55BVWz%2F%2F3MQW5ywVQmCUcypg3kxYN5QZah039RBghOSIzmM6TZZeGwq5EqnMJZOeB%2F%2BE36qBzwNZNxvNoaRq9E%2F801i23qzGMN%2Fv6RJX0XA06ExHCpBLTSCkGWXzrTKpVvhhdyynKase7st6BhedWuvOZiT88SE1nk5u1QEXlB5VXPZBLVlWi3j5bj3aFwFLixOYBClVm9VGPXeCyecO79wTWIpWGMbzrkuvlWAvT3j45nOUnfYMHu3%2BHrC5sU%2FwQPX%2FTM6xNn6sFaGYbXmAp9qW0vcKhTL4Lyb07DSVWkbmQsnN6C4isP8w8533LgzhItHo1QCpoUsluznXwhWtodPwVwVwf6uGcXii3e3kxUEKWsUS2vWK2Lmb0hcYj1oZuiR5P%2FAr61fF1Wr6HwXa%2F8%2BEDklHrE3VgqZNSYKtpkf%2BFtNbA8wchcoe09D1wKQpfSkTok%2F8Anub85uLouCfn1d3Qi4%2FNU8PcvzC%2BmtXJBjqkATpCCUxfrZvZbTqhgpmGrlavMFQzbton6k5x68Z1DRPP0J7NwmUJ%2F%2BSxmpMxyfCZRYHwhDAMS1tYOLQCNstpD5%2Ba3qEtNKgKBWmA1NL6OkdzDS6DAayqK4kGxglM%2B9uPfUZJajz0uo8upzrHuWPyDDntzjvp5pOykmjmhim4ftXoTmdLhRev1L%2FoQ8%2BireU%2Fz6ABrS%2BXu9KhLuMGE9KXc6Mr4duV&X-Amz-Signature=2a16a6958973c961afbaed0bff1f333459bbce39755571f9d464d3eff343cf58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

