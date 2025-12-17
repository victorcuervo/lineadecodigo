---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W32ZZPNZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzkMVpOVlzNfdic6YHFw556BJUQAtbJvtG%2BjHHM2xCLAIhAKZp5ZS2UwwbE%2BDiXXDHgWKRfFd5GVlaiFkORCSilZ%2FdKv8DCHcQABoMNjM3NDIzMTgzODA1IgyH%2FDtgOlM%2FNJuQzzMq3ANd%2BIOD7fdcnXmV5zX5c%2FPFm%2Bu%2FN8AlfiUEkOUn9ZsLqYJeamIiiXzILFzYanJncEa0rNkL1sZIWF0Z8Zhs7kn7l2ZYr92gRRD9naHcvDZr5%2F%2FaVPt7%2B%2BrOslPjPing8Ecu6f%2FOPgtpA6exQJ7eCjhqNhgp5GFjWr9NluryAo%2FVpELi8p86ap2GznsagPublRQRnjryZhGryTexb%2F5B8tOsmpcBkhTjwvHvBuiUh38N%2FDkDkqvGeJRf5ORmjrjbY0XH3mq3vkl%2FPAec1bqpBL677sVwlJLos6%2FYIOxSf0lHK1wJtGTT6vnozc%2BPKyeq2bN3BhjDvafgP8Kaa2P5Bprxq3IBzmmXEUPIlAKUGjrjh3j1AluSRHckL0qYgU7caAvmjGpH3PUoFjThrLk4HpDfX6LBUBAy3sW2uNn8pEopXkJRoh%2Bc6qmwVxYFCqEZLZLhnNlXc61Pa02ywQo1HCWsBTSKIqLxa7a3uNqAb%2Br5A5fGicvf7MxSfDYsdVwOA0nGxbEwwR6rX%2BdcHyhD0wEow87rUrxGckfvCWDLrdOpm%2BLHByLdXjvuEMYBFQSL4mIWQDLYPU%2FXOIXGwX3L2maQo%2FwEGGMAHnMEg0ue9lnEHUDV5StYFdE8R0Fw6jDkgonKBjqkAcCbJAU5QMD4zKBLKgJGGrxQqL5KL5WiuXMz04Y8MGmm0RIl%2FbEboL7UY%2F2fvHjRwF7sWU1D2dQMxjQnngqKSodv3H8JeniJDDbPumoWegmlLUTNFyXqwNdTVJxjAsIXFnkM2Mst8rU%2FbNOOMgeQrQHKOImg5lN%2BD4rpTDCOkerSwpmvZ1fzFN5%2B1f%2Bu%2BgLbbSM20ZJAtCgVQ3D07osbTtpNru83&X-Amz-Signature=3bd1ab3bc0a366e1d0a5d9bad49ce5ea02145c834590aa0cae020e8cb4fb68e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W32ZZPNZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzkMVpOVlzNfdic6YHFw556BJUQAtbJvtG%2BjHHM2xCLAIhAKZp5ZS2UwwbE%2BDiXXDHgWKRfFd5GVlaiFkORCSilZ%2FdKv8DCHcQABoMNjM3NDIzMTgzODA1IgyH%2FDtgOlM%2FNJuQzzMq3ANd%2BIOD7fdcnXmV5zX5c%2FPFm%2Bu%2FN8AlfiUEkOUn9ZsLqYJeamIiiXzILFzYanJncEa0rNkL1sZIWF0Z8Zhs7kn7l2ZYr92gRRD9naHcvDZr5%2F%2FaVPt7%2B%2BrOslPjPing8Ecu6f%2FOPgtpA6exQJ7eCjhqNhgp5GFjWr9NluryAo%2FVpELi8p86ap2GznsagPublRQRnjryZhGryTexb%2F5B8tOsmpcBkhTjwvHvBuiUh38N%2FDkDkqvGeJRf5ORmjrjbY0XH3mq3vkl%2FPAec1bqpBL677sVwlJLos6%2FYIOxSf0lHK1wJtGTT6vnozc%2BPKyeq2bN3BhjDvafgP8Kaa2P5Bprxq3IBzmmXEUPIlAKUGjrjh3j1AluSRHckL0qYgU7caAvmjGpH3PUoFjThrLk4HpDfX6LBUBAy3sW2uNn8pEopXkJRoh%2Bc6qmwVxYFCqEZLZLhnNlXc61Pa02ywQo1HCWsBTSKIqLxa7a3uNqAb%2Br5A5fGicvf7MxSfDYsdVwOA0nGxbEwwR6rX%2BdcHyhD0wEow87rUrxGckfvCWDLrdOpm%2BLHByLdXjvuEMYBFQSL4mIWQDLYPU%2FXOIXGwX3L2maQo%2FwEGGMAHnMEg0ue9lnEHUDV5StYFdE8R0Fw6jDkgonKBjqkAcCbJAU5QMD4zKBLKgJGGrxQqL5KL5WiuXMz04Y8MGmm0RIl%2FbEboL7UY%2F2fvHjRwF7sWU1D2dQMxjQnngqKSodv3H8JeniJDDbPumoWegmlLUTNFyXqwNdTVJxjAsIXFnkM2Mst8rU%2FbNOOMgeQrQHKOImg5lN%2BD4rpTDCOkerSwpmvZ1fzFN5%2B1f%2Bu%2BgLbbSM20ZJAtCgVQ3D07osbTtpNru83&X-Amz-Signature=83b4107a2e425c1ead64f7087a0e781806f9c93761637d91d74a40d68cc97f88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

