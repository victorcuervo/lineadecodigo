---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VBWSY2R%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCICNF8co0FqO0tu2cVKxvzzbYqhHp44UWocs13V9PN0TRAiBBhbhA2xXCVlyXeeF4Qkx%2BeVjSHI4VgyZr0Nmtqp1TPSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMDieypU0kWOm31k%2BjKtwDOfUmC85wWAYXHk%2BxvD5frSr%2BycFu9S5%2BzLQMYI5yE0ZRzRvnXYKy3gRSUT%2F1B6GlSvsF5XLqbHHDXNFLI4Xh2PnGhwakNmMVsuukOYtNGKd%2B64zea7OndVTcZ1SiuX11ycSdGiD5Fcgg7ezXP%2Fv9gNs3trg%2FM1%2BmsXo7ATBvkq8jEcrwSIXCGQ50nsPIEzkOjfBt1FzkPpWvzKA6USD%2FAIOVw%2FueDZJ4Ub5XmxqRqk9QUsgjkBba9PQfPry8kk%2Bs9HW7tZR1y7psXnKfmaLw5VvsJYY1AfYbdeTePsvrGkzEgFwprST1XMDqH5sAUxxFeOJsTpUr6ceUrMNmulXSZcW8%2FXCTBhbkO3BU2VwBQ80PqDppMMkAFRQDTam9Gmg5Lp8OndDu95qQg4NK5YQAAN5o930HKs9Fk2mhGUFncZKClqTX6h0gm%2FyALAsh6Id62A3DEWdbkKABHmzLYec%2B%2F9pH6Qwm64rtfnngsm37%2BUpRqJORKGDKV8DwbmGlrJTgWCEiaFJ283ShBPNGIXiELhS8s6rkAPMc%2FRMvxY1E3kStcACs7AurpZvz1o1yMjWqOK97PSe3BmO9ZMHJyi61cIY2YHQSvbMy7KTpw3iJ%2BLQuYM1Kp6YdgyVC90Aw%2FLPDyQY6pgFW0cUGh27AMjbDTyA96ME0z9ppW5xCZdJWITwna1Ln5QGZ0PxpCVN13oKy36wA9%2Fr%2Bwlcy48XGfYC1BhLmzVYH27XPLX%2BAf%2FdC%2BtuXFRgq9kFckpxGmIYzU4n0nyQLNOf%2BfQKVOul5yQkKW4JaOB6jiNBGTEUIlPcnFyirb3Vtw%2BDeWMq%2Fgmr8mcow%2F6byU6MgYop3orFiA5nNdQhoH2oN1AiFxeTL&X-Amz-Signature=60f4c8aa0520799873749395b3354deae5a7d9b627ee67ac1e89972f37ba26b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VBWSY2R%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCICNF8co0FqO0tu2cVKxvzzbYqhHp44UWocs13V9PN0TRAiBBhbhA2xXCVlyXeeF4Qkx%2BeVjSHI4VgyZr0Nmtqp1TPSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMDieypU0kWOm31k%2BjKtwDOfUmC85wWAYXHk%2BxvD5frSr%2BycFu9S5%2BzLQMYI5yE0ZRzRvnXYKy3gRSUT%2F1B6GlSvsF5XLqbHHDXNFLI4Xh2PnGhwakNmMVsuukOYtNGKd%2B64zea7OndVTcZ1SiuX11ycSdGiD5Fcgg7ezXP%2Fv9gNs3trg%2FM1%2BmsXo7ATBvkq8jEcrwSIXCGQ50nsPIEzkOjfBt1FzkPpWvzKA6USD%2FAIOVw%2FueDZJ4Ub5XmxqRqk9QUsgjkBba9PQfPry8kk%2Bs9HW7tZR1y7psXnKfmaLw5VvsJYY1AfYbdeTePsvrGkzEgFwprST1XMDqH5sAUxxFeOJsTpUr6ceUrMNmulXSZcW8%2FXCTBhbkO3BU2VwBQ80PqDppMMkAFRQDTam9Gmg5Lp8OndDu95qQg4NK5YQAAN5o930HKs9Fk2mhGUFncZKClqTX6h0gm%2FyALAsh6Id62A3DEWdbkKABHmzLYec%2B%2F9pH6Qwm64rtfnngsm37%2BUpRqJORKGDKV8DwbmGlrJTgWCEiaFJ283ShBPNGIXiELhS8s6rkAPMc%2FRMvxY1E3kStcACs7AurpZvz1o1yMjWqOK97PSe3BmO9ZMHJyi61cIY2YHQSvbMy7KTpw3iJ%2BLQuYM1Kp6YdgyVC90Aw%2FLPDyQY6pgFW0cUGh27AMjbDTyA96ME0z9ppW5xCZdJWITwna1Ln5QGZ0PxpCVN13oKy36wA9%2Fr%2Bwlcy48XGfYC1BhLmzVYH27XPLX%2BAf%2FdC%2BtuXFRgq9kFckpxGmIYzU4n0nyQLNOf%2BfQKVOul5yQkKW4JaOB6jiNBGTEUIlPcnFyirb3Vtw%2BDeWMq%2Fgmr8mcow%2F6byU6MgYop3orFiA5nNdQhoH2oN1AiFxeTL&X-Amz-Signature=1299ccfa3abc886ec6ae190640df2553362f1553be47dafdb350d38fcd0f89e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

