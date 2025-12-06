---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BWYSJFB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T035539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2Dy1FpegejcgTOvdoOmsofJHjz9KX3fn05rz5IYpJBAiB4M6VD5quhi7KBhJs4Mczr%2FPBi2XKggvfV%2FGz64C0QoSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMrZu1dOF6KFCppyVfKtwD9sRutyKrNwrMwpdgdhJ%2FLq8JlEV7YLKYmsLK17KOmOazdQLGoKvZyuU%2Fau132hRsQWE7d6mXoskA58XqAlsqx37WY0HdMO5YWKLQZTWZBFuon5BZva7o%2FdFcO9quWPpeK%2BEBXpcBwTE7lIjgIY0DZFIvAUQC9nDaxZWkXBLHzCVI75KNEGeBV%2BGyz1kuVUrJrR4KA9kT2wdzRTpeoU94wjUDqOUvyVCIOoqX1%2BiYyG0yxmdnHTQExr94G6iN0VO%2BXOVnse5znCpSCa54fs%2BqqNHjGhvxqQ7XbpyH6BaIMHzenYtw1yIvuetM4seFwo6lqfH0f5RIjglFeUeL8pDpr84K2HZk%2Bxk9I0tRpaL5M09WxjvTH9qJ0Sa%2BxD1ZWAg%2FP32cfs9K2Rrcr4zU0iJStO1VClMqntHWVAjXpN6b8Cv0gt%2FjhUotU87MXh7%2BNuaG%2Bg%2FQzntSoXLoh04DQ2eSzP6bwB2rdvW3ILvs2s6Bt9ib2a%2FG5rmwitp6GeAplMZJHAkFB%2B1nrNGY9%2FbA8AQxH1qrGrCcj%2Btvv6RZ3r4GzYrWuvDHbPhMGOCHslHhX3BBzfu8fSCb10CaJhKnZYJ4dbMJOilvg72MenchZAfbcjPfKhoRUKtNXvdhMHowvsPOyQY6pgHoiLdBLuBQ3%2Fj4OS81cSmnSOU8dlUc6b49GEfUfLenNihExcPK2%2FvClv2%2BPj8Y2c4BlJTG2iihnRf%2BixoDyRqA%2BOVW1lAEcLWmeBsGidbZKkMceWKTi5V%2B2OmsuP0rJqfLOtoUyoqkg4u3LKP5a6AkUl7NvdjN3JCf%2BzFN0HAgOEAUFYBCUUwGxtZABpRoHLpgZmbByilRIPfsII7weEPpEI7eWKP7&X-Amz-Signature=3f5408b3ecc0aa39860b93a899e84c1e752f0998dfb84a4517fc0e0c9fd52a2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BWYSJFB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T035539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2Dy1FpegejcgTOvdoOmsofJHjz9KX3fn05rz5IYpJBAiB4M6VD5quhi7KBhJs4Mczr%2FPBi2XKggvfV%2FGz64C0QoSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMrZu1dOF6KFCppyVfKtwD9sRutyKrNwrMwpdgdhJ%2FLq8JlEV7YLKYmsLK17KOmOazdQLGoKvZyuU%2Fau132hRsQWE7d6mXoskA58XqAlsqx37WY0HdMO5YWKLQZTWZBFuon5BZva7o%2FdFcO9quWPpeK%2BEBXpcBwTE7lIjgIY0DZFIvAUQC9nDaxZWkXBLHzCVI75KNEGeBV%2BGyz1kuVUrJrR4KA9kT2wdzRTpeoU94wjUDqOUvyVCIOoqX1%2BiYyG0yxmdnHTQExr94G6iN0VO%2BXOVnse5znCpSCa54fs%2BqqNHjGhvxqQ7XbpyH6BaIMHzenYtw1yIvuetM4seFwo6lqfH0f5RIjglFeUeL8pDpr84K2HZk%2Bxk9I0tRpaL5M09WxjvTH9qJ0Sa%2BxD1ZWAg%2FP32cfs9K2Rrcr4zU0iJStO1VClMqntHWVAjXpN6b8Cv0gt%2FjhUotU87MXh7%2BNuaG%2Bg%2FQzntSoXLoh04DQ2eSzP6bwB2rdvW3ILvs2s6Bt9ib2a%2FG5rmwitp6GeAplMZJHAkFB%2B1nrNGY9%2FbA8AQxH1qrGrCcj%2Btvv6RZ3r4GzYrWuvDHbPhMGOCHslHhX3BBzfu8fSCb10CaJhKnZYJ4dbMJOilvg72MenchZAfbcjPfKhoRUKtNXvdhMHowvsPOyQY6pgHoiLdBLuBQ3%2Fj4OS81cSmnSOU8dlUc6b49GEfUfLenNihExcPK2%2FvClv2%2BPj8Y2c4BlJTG2iihnRf%2BixoDyRqA%2BOVW1lAEcLWmeBsGidbZKkMceWKTi5V%2B2OmsuP0rJqfLOtoUyoqkg4u3LKP5a6AkUl7NvdjN3JCf%2BzFN0HAgOEAUFYBCUUwGxtZABpRoHLpgZmbByilRIPfsII7weEPpEI7eWKP7&X-Amz-Signature=119ccac5a17495aa26d724d877f9ee14a2244f3726112f27139bac66b5646253&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

