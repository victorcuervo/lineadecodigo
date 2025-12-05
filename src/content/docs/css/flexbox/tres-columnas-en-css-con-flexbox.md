---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DZDQJJ2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T145132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlmOua3C10s6i3PSzzLc47Q14sQPoG%2BhcY9SULCrdOQgIhAPKcQhEkXUBfZZ1aGnu5B0nlBT7vx%2BKXVdGG2OeFBObKKv8DCFsQABoMNjM3NDIzMTgzODA1IgyC%2Bxhl6uYyW1o1G3Iq3ANKU5WIwZENbx6syua%2Fmy%2B1d6%2Bw7o0T0r%2BlhaFr%2FQPyxdOlC%2Fobjga95CoineMAwostAGNfj8DY2F09A0DmbX%2BgKx9jJObq9Uy2GnsDNe1K%2FPHTJ8V9QPjDQtQkOR0mFrXARWLR3R2fKWZtI3JZTSbzIZObIEJT92cVzT0nPKRVqUaznjtwInuD4xbL11NZ4OpGsArRFmF%2F2Elfq5icjgaNzCvdWN7GQKaEuMIpfDZZV75QncAmse3SP2lYNaVDKk4u22Lsq8c3ZG9xzPFZirF4ujmStvyeaj5cymUcPFxZp5YOgfIvJwrsCDTl9btN%2Fvf67c5NcFPVIm8z8yzisZuMCsskCyq5Csy3ELyn7L3otWMk7PJwfllgT69Q0DIW7lAUkCgwKQnyuOTPjxqP85257b0zmQfFO122GD6hQIQhHb2JN%2BaDoGgEEfEtjsiFliMHv8j5%2FD13rsdYT0sQw8dmIYfVwrhO7HLRWPyJxqL%2BVm1no6dqdZ0sQGOoyf84mBxFi0qvY%2BDfo%2Fb715IPdjelcgLX4O2cytB7yDdI77sdjAj71kH60xTBgKVGh%2Bnkq62Tg47i0VSqZ7URC%2BlK5aSd2T%2FMfEA3jAHUUvHyBIQRd%2BG2NMoI0jjWeuzK%2BjCNzMrJBjqkAV2msf%2B%2FmR84CXUG2LuUc7T6ja0QMgpf7f51rF4GUe2iI8EOZMDSspNY17eaY3YZFdqF3XADuTflz2OphI2Gq1ammXvaV8itHys5GnM76yDcFmOScOap%2Ba9AMa0VcpFZckS72utgxvfiyhReGfN%2BdEStciP543bhTNAblH9UstOVssTKpM9U6pUlYVAc71I4izcngwjOhr%2BRHq8p3bSx6q%2BQsyQa&X-Amz-Signature=42bf957a6a41d7a14f167f1e1cef83692ee01af4daaae1a1829fd690eaab6633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DZDQJJ2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T145132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlmOua3C10s6i3PSzzLc47Q14sQPoG%2BhcY9SULCrdOQgIhAPKcQhEkXUBfZZ1aGnu5B0nlBT7vx%2BKXVdGG2OeFBObKKv8DCFsQABoMNjM3NDIzMTgzODA1IgyC%2Bxhl6uYyW1o1G3Iq3ANKU5WIwZENbx6syua%2Fmy%2B1d6%2Bw7o0T0r%2BlhaFr%2FQPyxdOlC%2Fobjga95CoineMAwostAGNfj8DY2F09A0DmbX%2BgKx9jJObq9Uy2GnsDNe1K%2FPHTJ8V9QPjDQtQkOR0mFrXARWLR3R2fKWZtI3JZTSbzIZObIEJT92cVzT0nPKRVqUaznjtwInuD4xbL11NZ4OpGsArRFmF%2F2Elfq5icjgaNzCvdWN7GQKaEuMIpfDZZV75QncAmse3SP2lYNaVDKk4u22Lsq8c3ZG9xzPFZirF4ujmStvyeaj5cymUcPFxZp5YOgfIvJwrsCDTl9btN%2Fvf67c5NcFPVIm8z8yzisZuMCsskCyq5Csy3ELyn7L3otWMk7PJwfllgT69Q0DIW7lAUkCgwKQnyuOTPjxqP85257b0zmQfFO122GD6hQIQhHb2JN%2BaDoGgEEfEtjsiFliMHv8j5%2FD13rsdYT0sQw8dmIYfVwrhO7HLRWPyJxqL%2BVm1no6dqdZ0sQGOoyf84mBxFi0qvY%2BDfo%2Fb715IPdjelcgLX4O2cytB7yDdI77sdjAj71kH60xTBgKVGh%2Bnkq62Tg47i0VSqZ7URC%2BlK5aSd2T%2FMfEA3jAHUUvHyBIQRd%2BG2NMoI0jjWeuzK%2BjCNzMrJBjqkAV2msf%2B%2FmR84CXUG2LuUc7T6ja0QMgpf7f51rF4GUe2iI8EOZMDSspNY17eaY3YZFdqF3XADuTflz2OphI2Gq1ammXvaV8itHys5GnM76yDcFmOScOap%2Ba9AMa0VcpFZckS72utgxvfiyhReGfN%2BdEStciP543bhTNAblH9UstOVssTKpM9U6pUlYVAc71I4izcngwjOhr%2BRHq8p3bSx6q%2BQsyQa&X-Amz-Signature=46b4fbf9ded31a6197bb3e13b24bdfc87c9f430aa0f0586b761f347dddfab8fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

