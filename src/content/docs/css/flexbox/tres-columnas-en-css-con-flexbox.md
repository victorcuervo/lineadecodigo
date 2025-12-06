---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU2NFWDX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T141211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCU%2BgDrlU8IA5pWrKzeaGzwNwpHo%2Bkjsnkwt4raFX2ipwIgeSv%2FKQP232RxjHxDLQ7gEMZRvxedQhw5OTPg%2Fej4lYsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKVfGKuIrrRtJzj30CrcA4DeiLTDbzJ9sH8UdCBwQrbOq0Qx9VyCh4m6E%2FLUa6gYiId2rL6KkgjOx2zgUREFa6ZNilsSNxV65ErjI8K7qdDnyI7jMepcNiJgHHMl0UAoFeiGjYIJIueFF14UCbookjpmVZ%2FrJHCLigKkWATXwsVNGryvdWc7%2Bc7iV2AD1QEsreGlXjzqausg7IXHi1VP4p%2BhXkHEQAUA6x22mnxhFDKEW8Lck3gSOysb%2Be2KHZpHbnnNoP761fIb0oRXxjJy%2BXUP2L%2FfgNx5gbvcn2dNvWvE%2BOSw9wIQWk0P2ISJfhYSOQ4HbOxZsiLnSz3Y%2BLg2xsDi6CbpNffu3bx0OGUbvOTqbXakIQB8b557fh3S28BqIvnrMBGzWauf25lkXnhOZ40My3IFmq6T93%2BIrUCVZS2rn2NBheDbYlvc101%2BT0W1TmSD7xD039ISyNx9Rf1aidyF%2FxkeKuUr0NkTwr0sVXFoVcbAkRN%2FjBoPjNVrsiT3I4uqIIDg9k3FIG9uaOJVXd1xrewKfpYzOXbQ4ZnQQ9Fve9rbexeJ4wVKOP3DXe3JH0O%2BbWq6KKi1T2XRAMMP6f%2FtX7MpDEs77w8zvR4L%2Fw2P8SzDWU0QcrnzOVw6mytM8hvVrAstZ9oGd1otMKam0MkGOqUBZ3ZYhf2EcXyJtTWIbYv6nDxQuio%2BJ67AzJxviAQbOQ4Gg2Mqd5AsfHRbQwBSM2EaZshAy3NN%2BoSELQJLanHp0%2FIEAAcgiHKDM3yXUZvycVVJsJdmnKZg%2BV%2BmuiPexIWPog42V3adUWA91tfpgRB4pHVI1R2ghzo6YTnnlUWtJhypt%2F5ZFIQ9PZIRmpd%2BqAxSmwxtzbAqp8%2FVpnAjyNji8%2Fgw6wVM&X-Amz-Signature=c05c7c3f0b1b1a3bfb3efce76f7545254067fac0ae2b525b829e648c383f8b42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU2NFWDX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T141211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCU%2BgDrlU8IA5pWrKzeaGzwNwpHo%2Bkjsnkwt4raFX2ipwIgeSv%2FKQP232RxjHxDLQ7gEMZRvxedQhw5OTPg%2Fej4lYsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKVfGKuIrrRtJzj30CrcA4DeiLTDbzJ9sH8UdCBwQrbOq0Qx9VyCh4m6E%2FLUa6gYiId2rL6KkgjOx2zgUREFa6ZNilsSNxV65ErjI8K7qdDnyI7jMepcNiJgHHMl0UAoFeiGjYIJIueFF14UCbookjpmVZ%2FrJHCLigKkWATXwsVNGryvdWc7%2Bc7iV2AD1QEsreGlXjzqausg7IXHi1VP4p%2BhXkHEQAUA6x22mnxhFDKEW8Lck3gSOysb%2Be2KHZpHbnnNoP761fIb0oRXxjJy%2BXUP2L%2FfgNx5gbvcn2dNvWvE%2BOSw9wIQWk0P2ISJfhYSOQ4HbOxZsiLnSz3Y%2BLg2xsDi6CbpNffu3bx0OGUbvOTqbXakIQB8b557fh3S28BqIvnrMBGzWauf25lkXnhOZ40My3IFmq6T93%2BIrUCVZS2rn2NBheDbYlvc101%2BT0W1TmSD7xD039ISyNx9Rf1aidyF%2FxkeKuUr0NkTwr0sVXFoVcbAkRN%2FjBoPjNVrsiT3I4uqIIDg9k3FIG9uaOJVXd1xrewKfpYzOXbQ4ZnQQ9Fve9rbexeJ4wVKOP3DXe3JH0O%2BbWq6KKi1T2XRAMMP6f%2FtX7MpDEs77w8zvR4L%2Fw2P8SzDWU0QcrnzOVw6mytM8hvVrAstZ9oGd1otMKam0MkGOqUBZ3ZYhf2EcXyJtTWIbYv6nDxQuio%2BJ67AzJxviAQbOQ4Gg2Mqd5AsfHRbQwBSM2EaZshAy3NN%2BoSELQJLanHp0%2FIEAAcgiHKDM3yXUZvycVVJsJdmnKZg%2BV%2BmuiPexIWPog42V3adUWA91tfpgRB4pHVI1R2ghzo6YTnnlUWtJhypt%2F5ZFIQ9PZIRmpd%2BqAxSmwxtzbAqp8%2FVpnAjyNji8%2Fgw6wVM&X-Amz-Signature=f3ec2261380b0610f203ac2c51ff3a88b6aa80af9177ec5da24693843a497e2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

