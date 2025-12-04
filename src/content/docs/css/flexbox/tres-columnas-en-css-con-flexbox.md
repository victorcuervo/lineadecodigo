---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF72E3ER%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCID%2Fjy4wD8n0e8z9FHthdU4sOgWgxiUBI2oZrRSHikEniAiEAyhqlROhsjX4QuJ7fi4elWPZf7rvk4RA9ebnTBnz0vWEq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDD%2F%2FcreA0496jfOJKSrcA08Z9j2ir2Cgee712y%2FPiJp%2FVAMb4Xr2N4PlqAtfAw89YOc%2B7LgC8IDac%2BA4r9MUo5ixLpyA7KwZhX0Qh3RH6fqb7ZN060IHYnp5ePuI2vZgdskuVnYOZtCmuSUCQklaiqd5Qgly2Ush4KKcS7ONv%2Bic9x4qifKd5%2B9SnKfx0S56s6oCAWfGzRuigwHz5RyiePPYaPKzHMgEjmtdwOd%2Buizs%2BXxj336R9kZXu3iV9dRckPJQLVduOvGSbKs6Ij7bUS4%2ByNKaOzg5IGwL4KYQ24XeAQ%2FIB9EfCqmcbDb5koN9mq8fF%2FG7WcwKVKPw6g5W2OrU%2F0OZxZ8x66m%2F8Yzo%2BanQBb%2BbEniCjNwnViT8cbGUXLYokr6wUaJrOBTLjr6hcrE%2Bbdg%2BjgazCZj4alU8YXe5CDbe3cnyXLxlPHFZBaP1lhilX%2F%2BkAq0nZHp%2BxcEkunNpeQZnDe40EljXKYfHqyFhS6UQCPsaBPjZOFhZIsNcUK2pEuzLPtM2gAYXmfaHnvDLd3CYLrCaIFfZtcKPPeUcaplE4eVDx2jkfSn85jwwbNR8qsxnDipwvUfh7AwtptnTVb4148%2B98yNaDWjz95k7TyATWHWQIHUQmJIK%2FuNw368lkf%2BZyqrmvV6aMKeuxMkGOqUB8hns%2FiA%2FTpEf%2B6GXkdWeKILKAELnfmEF%2Bhh2Cr8bR76Q35JWdlncjzRigmxCSIpPYNTj7Bv8SrF%2FRnTh8qistLXVvMFKND%2BN%2FA8%2F4jmw%2Bb%2BgNwYRB3K99x43fCroXfFTAUc7l%2FsQDlkQL%2FmdHgkyct9FnVu%2BbkMK13sez3hwQtsaszFmYjOu5Dc3rxz7le8zkxzuh8HcthV2cEVDV%2B66qRQEMNEg&X-Amz-Signature=fcd008335060f5ee8201733516e31086102a00359b48f9fdc36eba0c8466130f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF72E3ER%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCID%2Fjy4wD8n0e8z9FHthdU4sOgWgxiUBI2oZrRSHikEniAiEAyhqlROhsjX4QuJ7fi4elWPZf7rvk4RA9ebnTBnz0vWEq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDD%2F%2FcreA0496jfOJKSrcA08Z9j2ir2Cgee712y%2FPiJp%2FVAMb4Xr2N4PlqAtfAw89YOc%2B7LgC8IDac%2BA4r9MUo5ixLpyA7KwZhX0Qh3RH6fqb7ZN060IHYnp5ePuI2vZgdskuVnYOZtCmuSUCQklaiqd5Qgly2Ush4KKcS7ONv%2Bic9x4qifKd5%2B9SnKfx0S56s6oCAWfGzRuigwHz5RyiePPYaPKzHMgEjmtdwOd%2Buizs%2BXxj336R9kZXu3iV9dRckPJQLVduOvGSbKs6Ij7bUS4%2ByNKaOzg5IGwL4KYQ24XeAQ%2FIB9EfCqmcbDb5koN9mq8fF%2FG7WcwKVKPw6g5W2OrU%2F0OZxZ8x66m%2F8Yzo%2BanQBb%2BbEniCjNwnViT8cbGUXLYokr6wUaJrOBTLjr6hcrE%2Bbdg%2BjgazCZj4alU8YXe5CDbe3cnyXLxlPHFZBaP1lhilX%2F%2BkAq0nZHp%2BxcEkunNpeQZnDe40EljXKYfHqyFhS6UQCPsaBPjZOFhZIsNcUK2pEuzLPtM2gAYXmfaHnvDLd3CYLrCaIFfZtcKPPeUcaplE4eVDx2jkfSn85jwwbNR8qsxnDipwvUfh7AwtptnTVb4148%2B98yNaDWjz95k7TyATWHWQIHUQmJIK%2FuNw368lkf%2BZyqrmvV6aMKeuxMkGOqUB8hns%2FiA%2FTpEf%2B6GXkdWeKILKAELnfmEF%2Bhh2Cr8bR76Q35JWdlncjzRigmxCSIpPYNTj7Bv8SrF%2FRnTh8qistLXVvMFKND%2BN%2FA8%2F4jmw%2Bb%2BgNwYRB3K99x43fCroXfFTAUc7l%2FsQDlkQL%2FmdHgkyct9FnVu%2BbkMK13sez3hwQtsaszFmYjOu5Dc3rxz7le8zkxzuh8HcthV2cEVDV%2B66qRQEMNEg&X-Amz-Signature=a78a647e1ea9f3a5773ffdf9f9ac538e6e38e36e78d0b8abef894f1103ac9afc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

