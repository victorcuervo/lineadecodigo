---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FTHM5UG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T082512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDK1XHCGiTlhbZj%2Bdx3N97Z0NO064oLyY3AlXk1d29JSAIhANHekxumEINrgSvIxKajHfBIRxhHYVqN%2FrjAN25HnJx7Kv8DCFUQABoMNjM3NDIzMTgzODA1IgxWSpfh5wflNtXUWc4q3AP5g7UBnySMaRCZg0N%2Ft7luUEfbgfg1KZLQiZCl9SE3gNBx3Rrg7vAggEH0Uam6t5ISCca4cZhvF%2FOdjZsRv1HpTIXLo22BT9JeTcIJtnsT8zxLsdZxh8ablnuDnfnKaizIrC48fn29VPYNN6HIVH28QJzJJyG%2FARXB12z%2BTq7gbuK7Rmmjl1%2BdqYVEXgCGz9A3E1gYpDm5xreYSmPLvSMyfjjlDVkJtPOLyuD2gng6GVdD2sqiFPWnxmMeZ3xLxek5ujNNmjRNRgd7Hb5ogcVxtevrUY%2Fu%2BxwP4M8pwR9xeYbtRfbUPBMbkWBT2Ph8CMSoX%2Bsdf7rDoR7PZNKmGGGFXaK%2FXSu30QtewVBIAd1mKFNSFmpTmTVj2vUJDxIz6B65qHhLZYhM4PXCwZb3wlmg6CYF8sgb94z0BRapGeeQOqHsx8twWxC0DZ0reQJGyeM6%2BiT9uDHYC95sbRyJl9Vh1YbPNkKmL1OFzE7FpEDHryhfq6JgDmHhOdmrW26qzpkeJPp9WZrRgmjI7BDgPTgr0sYVhoJ%2Ffcp0cGiNrXnXU%2BtfhIC8zh77Ww8QYlQu5IXDUM9K0PxHxSGXkjDNM%2FRBi0fnP6aQOzldu9G%2BS01A6KOj4pcCBp4nmYPw6jC1rsnJBjqkATxgB2BDxrzcd7rpLJ5eyGFFstKHApL4Rz7Qb8afH68CPVyIi0y0PleC1S4ar%2F0kOGH4IJ%2FfNEqz3mBAHQzvHQefERFXUYFqlKgEmoO5MZVHwmilFC4JkYuqH%2F3sEd45w6LdDwLH8uiCrMp2Vxb3MFBcJ1kkf26ZRHrTkdnrtobksi22U7lAfRVkPwcrwleMTvLbF%2BwcIismbuj%2BdC9n0T2X%2BcPI&X-Amz-Signature=6c83f1bc67d91da45467b3a414033385cc69f7c02e7f1af2f9b08340b367808c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FTHM5UG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T082512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDK1XHCGiTlhbZj%2Bdx3N97Z0NO064oLyY3AlXk1d29JSAIhANHekxumEINrgSvIxKajHfBIRxhHYVqN%2FrjAN25HnJx7Kv8DCFUQABoMNjM3NDIzMTgzODA1IgxWSpfh5wflNtXUWc4q3AP5g7UBnySMaRCZg0N%2Ft7luUEfbgfg1KZLQiZCl9SE3gNBx3Rrg7vAggEH0Uam6t5ISCca4cZhvF%2FOdjZsRv1HpTIXLo22BT9JeTcIJtnsT8zxLsdZxh8ablnuDnfnKaizIrC48fn29VPYNN6HIVH28QJzJJyG%2FARXB12z%2BTq7gbuK7Rmmjl1%2BdqYVEXgCGz9A3E1gYpDm5xreYSmPLvSMyfjjlDVkJtPOLyuD2gng6GVdD2sqiFPWnxmMeZ3xLxek5ujNNmjRNRgd7Hb5ogcVxtevrUY%2Fu%2BxwP4M8pwR9xeYbtRfbUPBMbkWBT2Ph8CMSoX%2Bsdf7rDoR7PZNKmGGGFXaK%2FXSu30QtewVBIAd1mKFNSFmpTmTVj2vUJDxIz6B65qHhLZYhM4PXCwZb3wlmg6CYF8sgb94z0BRapGeeQOqHsx8twWxC0DZ0reQJGyeM6%2BiT9uDHYC95sbRyJl9Vh1YbPNkKmL1OFzE7FpEDHryhfq6JgDmHhOdmrW26qzpkeJPp9WZrRgmjI7BDgPTgr0sYVhoJ%2Ffcp0cGiNrXnXU%2BtfhIC8zh77Ww8QYlQu5IXDUM9K0PxHxSGXkjDNM%2FRBi0fnP6aQOzldu9G%2BS01A6KOj4pcCBp4nmYPw6jC1rsnJBjqkATxgB2BDxrzcd7rpLJ5eyGFFstKHApL4Rz7Qb8afH68CPVyIi0y0PleC1S4ar%2F0kOGH4IJ%2FfNEqz3mBAHQzvHQefERFXUYFqlKgEmoO5MZVHwmilFC4JkYuqH%2F3sEd45w6LdDwLH8uiCrMp2Vxb3MFBcJ1kkf26ZRHrTkdnrtobksi22U7lAfRVkPwcrwleMTvLbF%2BwcIismbuj%2BdC9n0T2X%2BcPI&X-Amz-Signature=0cc88111de6414cb9f0653f8534a532a69cebdff399e94c8a8f9a9bf068546af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

