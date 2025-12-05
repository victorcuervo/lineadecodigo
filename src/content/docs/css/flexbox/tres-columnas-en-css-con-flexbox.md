---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3DBRGMW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T141242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGxqOYyUc3ULiu%2BAuBN6mwS9J92sVCdHgMkb%2FGdSZNy9AiEAiZnmxdgYxHPiIeKuG6SLp5YF0s%2FchzjVqmsLhcgzNfUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDtB%2BgVPlUOqeei%2BwyrcA48KdVMkgMRTJ%2BlYw00FxX1Fv%2BFlTVwNx9fegD5t5w6%2FMpK80IPGtOeee3wiYhuS%2FhcJu3HhIWRy71on1ufELdCduxcPTLYeFpovwch5WLrezMK5Kx1cDy4knaPh7zvh5oQ0mBDvQ7LTSC7I%2Ftcnk39KZiNwmhdpguNZSHO01v1VZxmKmBQWBWSA0jULtxQPWf8oBJBztyQlGKHgRdgSQhfyZ3m5HJQjlFw%2F2IB0%2B5loEIIzRA9kv7hF7mtG0CN1SuKsjmB4C22%2BujvPlC091ojUF64Uke5%2BpBSEtqD%2FcRGrGhks%2Faqs%2BPdmJwBkrBDaYnWIRbtUiq6UNThadwaqQTtUtiuLpD5Cze6V5SSR8qpuXk4JiDYKIKM%2BJfT0YYXgQEq8Ha7oW3j%2FzAEbUoPgF9Xb%2BllRjnm5DmJJKxWnMSrI6w24m%2BnPbCV4coTcz1f8BIDiy98iGchcMQ6Y1rFqk4EMXxW7gWCtOzrJszvNGxYENv%2BDC4M%2BGagMz9CNHicw10ozA3T9SVmLSCDpNsSoSSTN0AipM8gZyupi0Kc2bqkjEotVgnqX4YzRyXzQJcMoHh4FOyVlAXLri8f3h9IafzW%2B4vQ2gQnKGlmDlxxIbcnyF4P73KuwcUkEBrJFMK7UyskGOqUB%2B5C%2BfAaDPqr0AQWtBK5KAbddwGjmxM9r1I2RzUxhvn0BvhJ%2B2ya4Bk%2FuWR3OZe8XYU%2FWuC7otNBYnqpz7fCAViSdx7LELUYiFGJ2ymTK1zaJ1OSOhailK2SGT7V9o9CAjq83kSo2GP2bvtJjhKMssbxcFJwl53lUk3XO7yTOubqjlj9VQ%2FsXYpIBjqeTGwd6zcaPXNvrtRyMYzsnQb%2FjdK1BrItk&X-Amz-Signature=d5a82c833235f887dc2fd52aed9e712b5053e9d3117b5c1c6bb8a89b3c20c10b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3DBRGMW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T141242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGxqOYyUc3ULiu%2BAuBN6mwS9J92sVCdHgMkb%2FGdSZNy9AiEAiZnmxdgYxHPiIeKuG6SLp5YF0s%2FchzjVqmsLhcgzNfUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDtB%2BgVPlUOqeei%2BwyrcA48KdVMkgMRTJ%2BlYw00FxX1Fv%2BFlTVwNx9fegD5t5w6%2FMpK80IPGtOeee3wiYhuS%2FhcJu3HhIWRy71on1ufELdCduxcPTLYeFpovwch5WLrezMK5Kx1cDy4knaPh7zvh5oQ0mBDvQ7LTSC7I%2Ftcnk39KZiNwmhdpguNZSHO01v1VZxmKmBQWBWSA0jULtxQPWf8oBJBztyQlGKHgRdgSQhfyZ3m5HJQjlFw%2F2IB0%2B5loEIIzRA9kv7hF7mtG0CN1SuKsjmB4C22%2BujvPlC091ojUF64Uke5%2BpBSEtqD%2FcRGrGhks%2Faqs%2BPdmJwBkrBDaYnWIRbtUiq6UNThadwaqQTtUtiuLpD5Cze6V5SSR8qpuXk4JiDYKIKM%2BJfT0YYXgQEq8Ha7oW3j%2FzAEbUoPgF9Xb%2BllRjnm5DmJJKxWnMSrI6w24m%2BnPbCV4coTcz1f8BIDiy98iGchcMQ6Y1rFqk4EMXxW7gWCtOzrJszvNGxYENv%2BDC4M%2BGagMz9CNHicw10ozA3T9SVmLSCDpNsSoSSTN0AipM8gZyupi0Kc2bqkjEotVgnqX4YzRyXzQJcMoHh4FOyVlAXLri8f3h9IafzW%2B4vQ2gQnKGlmDlxxIbcnyF4P73KuwcUkEBrJFMK7UyskGOqUB%2B5C%2BfAaDPqr0AQWtBK5KAbddwGjmxM9r1I2RzUxhvn0BvhJ%2B2ya4Bk%2FuWR3OZe8XYU%2FWuC7otNBYnqpz7fCAViSdx7LELUYiFGJ2ymTK1zaJ1OSOhailK2SGT7V9o9CAjq83kSo2GP2bvtJjhKMssbxcFJwl53lUk3XO7yTOubqjlj9VQ%2FsXYpIBjqeTGwd6zcaPXNvrtRyMYzsnQb%2FjdK1BrItk&X-Amz-Signature=2166693ebade284f047c50bfba7a106547febc10afbc9c4b1562bed690b3253a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

