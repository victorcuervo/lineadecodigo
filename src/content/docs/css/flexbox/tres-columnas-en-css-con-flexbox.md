---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LWSMGIH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T112457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl26CKKHPeeBBKGua0%2FGC1dD2QVVJgdm0iAUUhr6To1wIgHljPPdZTAuYtC%2BU4jgnZQdaRDssHyVImxiMF3UiYYccq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJpBUPAaw29BeDjEUSrcA%2FCYaob0oQ5Fi2vjoQ6P86%2FDYRPt%2BfMqN0vurC0VH52FFTw1KXe%2FYpjTrL2bj4WeqCmqSU0Vl%2FOSG1nX%2F4990HkRLC%2FCIR%2F15hhosKKmIxdWuBlQqyqMOAhXFAu4L0MEoNr05rzdijBa0qybTyNSmultAHLjhTRGdxeG4eIuwrofaoFmiKuGNnVSKhwsCq9YtS7OHs6eouBNGYKH80xyqKIKLNB9WWz3WML9uqTi1f%2Fbi7SlOoQbDLr4P1u%2FgUGdKk3P2tiHRHqp0qIhgSMHbSn58Tp3x5Ixd4zs4OHYZAzhaXssMB1QDoOdavtuzdhuaS%2BHF7Ivw7nSbh0jABKtTLvwkdZqPiN0IJoYiXfW5wAZWeUV4ILcGmyXirOjwg857CFCm0lhUcWoUe8SYy6WCdLNCKqMU93Gtr88LXag3eUtjfu0HGfpDP%2FrR2mGbCGTu3YPDfthmQQstFdiQpRlhN8cwDxpC88duzQPngN25uUd0wfkRXvijYTWqgC9AqAWgma%2FVbhvcqOpAJEIpeOcEy3nm7jLWhwjcN91YZ8yUPsGZqDVpBx9e2rSdtpBG%2FctVcSKLzvvzuQWLfueExqbYW9bC1Eq4Srn43BKnKhr9wDcbdy%2FQve3pj2AJ8myMJvVyskGOqUB4u9%2By1mzj86jNmbITDlyjFGSZFx0cfQL0uUzaZv%2FNo%2FMfUdEMhdHSW6C%2BeJTAMYLoYcjxPjwFq5TCuZJJy%2BfhMAHhLnsgW4Yz%2Bd6OJqamUg9YTRcCX1wh6OXDHdETX8VcLiGtiRqF%2FQU8TXXFHxCL7ictpmjiOWHas5BTdj4e4PEC1%2FmQNTZMFrAaVVuKHv3vb0TBfymG6hE%2FuQZU3mUaxsMwDMD&X-Amz-Signature=a7eb88f65849c7c24c50efb1afd1cb2377d488e3fab7ee5fa3632aa111b438c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LWSMGIH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T112457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl26CKKHPeeBBKGua0%2FGC1dD2QVVJgdm0iAUUhr6To1wIgHljPPdZTAuYtC%2BU4jgnZQdaRDssHyVImxiMF3UiYYccq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJpBUPAaw29BeDjEUSrcA%2FCYaob0oQ5Fi2vjoQ6P86%2FDYRPt%2BfMqN0vurC0VH52FFTw1KXe%2FYpjTrL2bj4WeqCmqSU0Vl%2FOSG1nX%2F4990HkRLC%2FCIR%2F15hhosKKmIxdWuBlQqyqMOAhXFAu4L0MEoNr05rzdijBa0qybTyNSmultAHLjhTRGdxeG4eIuwrofaoFmiKuGNnVSKhwsCq9YtS7OHs6eouBNGYKH80xyqKIKLNB9WWz3WML9uqTi1f%2Fbi7SlOoQbDLr4P1u%2FgUGdKk3P2tiHRHqp0qIhgSMHbSn58Tp3x5Ixd4zs4OHYZAzhaXssMB1QDoOdavtuzdhuaS%2BHF7Ivw7nSbh0jABKtTLvwkdZqPiN0IJoYiXfW5wAZWeUV4ILcGmyXirOjwg857CFCm0lhUcWoUe8SYy6WCdLNCKqMU93Gtr88LXag3eUtjfu0HGfpDP%2FrR2mGbCGTu3YPDfthmQQstFdiQpRlhN8cwDxpC88duzQPngN25uUd0wfkRXvijYTWqgC9AqAWgma%2FVbhvcqOpAJEIpeOcEy3nm7jLWhwjcN91YZ8yUPsGZqDVpBx9e2rSdtpBG%2FctVcSKLzvvzuQWLfueExqbYW9bC1Eq4Srn43BKnKhr9wDcbdy%2FQve3pj2AJ8myMJvVyskGOqUB4u9%2By1mzj86jNmbITDlyjFGSZFx0cfQL0uUzaZv%2FNo%2FMfUdEMhdHSW6C%2BeJTAMYLoYcjxPjwFq5TCuZJJy%2BfhMAHhLnsgW4Yz%2Bd6OJqamUg9YTRcCX1wh6OXDHdETX8VcLiGtiRqF%2FQU8TXXFHxCL7ictpmjiOWHas5BTdj4e4PEC1%2FmQNTZMFrAaVVuKHv3vb0TBfymG6hE%2FuQZU3mUaxsMwDMD&X-Amz-Signature=856ec598941cda18ce18aedb8ba8837918630c764e1537b62631cd2787d9082b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

