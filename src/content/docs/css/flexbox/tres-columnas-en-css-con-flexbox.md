---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CPO77ZS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T090207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk%2B5PwAVDCFQel2dTBkwDBuwNTTvwnn0AoZvZKgQOVfQIhAL5s4WyO5%2FSdS9S7UDIlZmj28GLNJ3Qxx3Gqzfqh3TpiKv8DCHEQABoMNjM3NDIzMTgzODA1IgynlPXMOHbVyD7re1Eq3ANTyHb%2FaJPtLeTzXS7CCrNwv4uuPdFWCxCBAABbMkQ7b1jCkbGxo%2FEpXTWbwVqv2fs7EWflFCoXaOvxUNmHJbR3nUpdDChvb2TaLLCa56swHM2SmJlSd6zjTuka91VKFWBX8tq93tlS0x5rlGf%2BirXGGJITPmoptb1UjKtxcv%2BjXkcvHN1QWMESKi4o6DP%2F7fx7HiFDmGygESf0MnivR8jqX3PP1Qxf6Wk6e4Yjv3kmARM%2FA4gqQGuWqbDES2PT0uJtxwRLDvYC1E8AjcC03g69H61OrAZ6yZB%2BlMai87cVKzWdbrj9ETo4vYMzTTCMXcfmKJdlaosPR%2F%2Fuam%2FAUvDbgtz9R%2BdIyNuT5wOYbqc2BryNc6I9dcOYg9ibmm3SOcnN3DVQjVcAwtTWyzaz73jZ91y9kqPpKGXeZo4x%2F6hwtFjLIB9EMndcpUhgAWe%2B5S370HIzf9ePFlY9alitaIqHuXXD1HDzG%2FOuT%2Bzt4ssvSulhBH7mnpDxL6Gr%2F%2FU3JUP5LA5T5wqXB5y40kx2FSm%2BGP0Q4dfiYq%2By%2BB3VdbrmJHh5paPSdIzZwXc5JaBnvKh%2Fm6rEM0JC%2FtjcuIgqCQPDlQlXLesiaAu%2FkknHIoPtvoSRgG32Eg%2Bpijz9hDDIvM%2FJBjqkAYUeFe9yiMfJiVkvbojQY0hK3CY6KRJrEB1IMQAwTWj5%2FbqrGXguN152%2Flt2oRD5X6s4kefL8hrGjzJYZOqL%2FHSqkFerLOBBsyl0tbAHxrV7ia8M51G2Ktp68sEnH0%2BTk7Oq3GrL%2FJgXMHHAO1KkY%2FZDLM8y6RCWR3NFsynjFkW9aGJfAv5FdBOnlZIJc4cfs70Jn7lxvezc2VAPRocT3kvFe6dS&X-Amz-Signature=a987c40a6f3e5d79c98d3ca68fa83e9bddcdf34ff795d9c922531f9035d6f860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CPO77ZS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T090207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk%2B5PwAVDCFQel2dTBkwDBuwNTTvwnn0AoZvZKgQOVfQIhAL5s4WyO5%2FSdS9S7UDIlZmj28GLNJ3Qxx3Gqzfqh3TpiKv8DCHEQABoMNjM3NDIzMTgzODA1IgynlPXMOHbVyD7re1Eq3ANTyHb%2FaJPtLeTzXS7CCrNwv4uuPdFWCxCBAABbMkQ7b1jCkbGxo%2FEpXTWbwVqv2fs7EWflFCoXaOvxUNmHJbR3nUpdDChvb2TaLLCa56swHM2SmJlSd6zjTuka91VKFWBX8tq93tlS0x5rlGf%2BirXGGJITPmoptb1UjKtxcv%2BjXkcvHN1QWMESKi4o6DP%2F7fx7HiFDmGygESf0MnivR8jqX3PP1Qxf6Wk6e4Yjv3kmARM%2FA4gqQGuWqbDES2PT0uJtxwRLDvYC1E8AjcC03g69H61OrAZ6yZB%2BlMai87cVKzWdbrj9ETo4vYMzTTCMXcfmKJdlaosPR%2F%2Fuam%2FAUvDbgtz9R%2BdIyNuT5wOYbqc2BryNc6I9dcOYg9ibmm3SOcnN3DVQjVcAwtTWyzaz73jZ91y9kqPpKGXeZo4x%2F6hwtFjLIB9EMndcpUhgAWe%2B5S370HIzf9ePFlY9alitaIqHuXXD1HDzG%2FOuT%2Bzt4ssvSulhBH7mnpDxL6Gr%2F%2FU3JUP5LA5T5wqXB5y40kx2FSm%2BGP0Q4dfiYq%2By%2BB3VdbrmJHh5paPSdIzZwXc5JaBnvKh%2Fm6rEM0JC%2FtjcuIgqCQPDlQlXLesiaAu%2FkknHIoPtvoSRgG32Eg%2Bpijz9hDDIvM%2FJBjqkAYUeFe9yiMfJiVkvbojQY0hK3CY6KRJrEB1IMQAwTWj5%2FbqrGXguN152%2Flt2oRD5X6s4kefL8hrGjzJYZOqL%2FHSqkFerLOBBsyl0tbAHxrV7ia8M51G2Ktp68sEnH0%2BTk7Oq3GrL%2FJgXMHHAO1KkY%2FZDLM8y6RCWR3NFsynjFkW9aGJfAv5FdBOnlZIJc4cfs70Jn7lxvezc2VAPRocT3kvFe6dS&X-Amz-Signature=87ed5836e952171a17cea0a223311f8d71a867f1fafbde99919a439d8f1ab091&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

