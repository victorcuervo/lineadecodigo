---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBJL2FEL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T153608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIfpPZLh2tQzdev9nlg1gl6S5IkHO2uFyITihdgkzBxAIhAP3BciYA3fFtGUj0thUi%2BmQfZOGglU87w4k9D%2Fa3Az8jKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXal6rtbM16sGgxJsq3AP%2B6LxiUKAgiLgzoKuZyQoLiskhhekMWKosQMoph9Qp6AjcZaMCvVOu8d6MnLtYvo9IQuPNJ532RaqefSVRHlVHb%2BxdqU2LKxljE8Yyy5oZviUuYN7mB4GHbB8I32dW0LsHSR5ZVBf1lyuvy19hWJSziHn5%2Fe4ElfpC9%2Fc57ybTAV5KGGafFEb%2BBVMWRet5u1WHH%2FZlvCq%2FKp%2FqthJQZTW6A8w6DcWxW2uDTNJXyCNMCob0vUOh8oJ71YXBxgq%2FPJrrVoxBVpSicRpkt6uoCqtyv6%2BFFzHxGTpp7p464z7hcKtsfBUBtQ9BNpxhn2%2BW1NIkzCIhDV8kjEUPBrq5dgWnTaW%2BRI3wWEXo%2Br5SqRSDcWEDmI6kBsCGDrgN5i11cjEU3oqPhmDrbh5UoakmLJ9rSTsHQiKFybvxsyG%2Bczyc2Wr1Lze%2FksJGh93C84aVDs6BYsbbdD4EEv9Wq3IjHKwyL4b66oGe5Rn5fApLhytKG6OPv5Ne%2F6cL4zBdawzjrAhYiy1G8ZShmUELI2Kgq4gv9ZRydoqreUBbbGtUK%2BoTCEzPbk4LBgIA%2Bag4Ym8gpBeh0W9t7ZwHmIcwuWQRL7748l6WXdMPBmm6ixqYKKjbuDXqDAWVhO%2BperIUhjDEwdvJBjqkAZjk%2BBFRdSSSFcE%2BewV8AR0xQLLuxkf7rRW%2FtGVqW2cm71VE7GES3wUGakFlw56%2B10%2FaGpxOdlFHL%2FFYGXI79hat9%2FjzB2ZwhLW6Q%2Fll6ORvbyEKF3XC1mln2uAC2wLN3Q0PRTvDL8HgHhpAXyNPB3C0OXT4RnWUMjMODsr2XmJF0TTdfGPDB7K%2Fdn9PC1LiZ7qyHm2yu1GMc9W4V09KXWwxC7HL&X-Amz-Signature=df949b5c4c921275724f35417928cb13e95411edf9b9e78ffa52482a0a6493ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBJL2FEL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T153608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIfpPZLh2tQzdev9nlg1gl6S5IkHO2uFyITihdgkzBxAIhAP3BciYA3fFtGUj0thUi%2BmQfZOGglU87w4k9D%2Fa3Az8jKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXal6rtbM16sGgxJsq3AP%2B6LxiUKAgiLgzoKuZyQoLiskhhekMWKosQMoph9Qp6AjcZaMCvVOu8d6MnLtYvo9IQuPNJ532RaqefSVRHlVHb%2BxdqU2LKxljE8Yyy5oZviUuYN7mB4GHbB8I32dW0LsHSR5ZVBf1lyuvy19hWJSziHn5%2Fe4ElfpC9%2Fc57ybTAV5KGGafFEb%2BBVMWRet5u1WHH%2FZlvCq%2FKp%2FqthJQZTW6A8w6DcWxW2uDTNJXyCNMCob0vUOh8oJ71YXBxgq%2FPJrrVoxBVpSicRpkt6uoCqtyv6%2BFFzHxGTpp7p464z7hcKtsfBUBtQ9BNpxhn2%2BW1NIkzCIhDV8kjEUPBrq5dgWnTaW%2BRI3wWEXo%2Br5SqRSDcWEDmI6kBsCGDrgN5i11cjEU3oqPhmDrbh5UoakmLJ9rSTsHQiKFybvxsyG%2Bczyc2Wr1Lze%2FksJGh93C84aVDs6BYsbbdD4EEv9Wq3IjHKwyL4b66oGe5Rn5fApLhytKG6OPv5Ne%2F6cL4zBdawzjrAhYiy1G8ZShmUELI2Kgq4gv9ZRydoqreUBbbGtUK%2BoTCEzPbk4LBgIA%2Bag4Ym8gpBeh0W9t7ZwHmIcwuWQRL7748l6WXdMPBmm6ixqYKKjbuDXqDAWVhO%2BperIUhjDEwdvJBjqkAZjk%2BBFRdSSSFcE%2BewV8AR0xQLLuxkf7rRW%2FtGVqW2cm71VE7GES3wUGakFlw56%2B10%2FaGpxOdlFHL%2FFYGXI79hat9%2FjzB2ZwhLW6Q%2Fll6ORvbyEKF3XC1mln2uAC2wLN3Q0PRTvDL8HgHhpAXyNPB3C0OXT4RnWUMjMODsr2XmJF0TTdfGPDB7K%2Fdn9PC1LiZ7qyHm2yu1GMc9W4V09KXWwxC7HL&X-Amz-Signature=200ccc511ac4aaa1dae53e0e112a6b96d2e925cabbb6c0de21eac3ddc2758ba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

