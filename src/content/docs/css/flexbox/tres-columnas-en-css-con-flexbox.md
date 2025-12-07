---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675E367EV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRD5g9SEhSN2E%2Bef3v8yp0eA0mY2Gb9kDqENb5WCJ%2FcwIgZmcKMgRWwygPN5%2FbASPzLzfR5EaQnGW0BWerG%2FJArr8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8YipT7vvq0v10F%2BCrcAzMmDChFaJUivhjNFV6PQ9EKK7amtV7t6yeRgRdqkIBF9H1PhQvc5eH7nx4Wef3Ij3IMOaxBLJVar0L0uhPxr9%2B%2F%2BqsQeuNfakKLUPwSHv9jZOasTid2S%2FmtRrzFxj%2B2FXJuX62yTmjkdbwlZXc2IQrCrhMPKYhHdo7TDjEfLdLi0%2BPnLGA%2F3r9i2G3ZRUeqcnes42gxcb%2FlNrZ811OdsXv7C%2BxFc8A5UI3i9pB8x6Owb1aUwjgVF616m1YWsJp00j9FmVPjCOogAUaVaiSuOnLNqE9UOOnKzRKDZl33tcBykPeFR55af2eWVSB%2B7Q9jwYHWmNk0KynFL9m%2B1ktfq8gBZin1eIVJ%2BpTCW0qiNznLDubvTA1AyKbPZcWgv9d3KIQbwTiT4nU%2Fa6D7n10sf4OxrsHcYUzpIeSe8N84ze8X6PM0Vgf%2FHV4L1NgGjyey1XxiUijo3Rbh49MSVVHU1towgtSm2Dsg3WhC2Gb2E1k8nGZ0QXooPsNdKdYtQct1RcgZw3azdzBwPEEVIew4r0HNE%2BT6IvjSihiQR9Wbssp9rswcx3gz2MN2mllBMldWJUzcnJnQQWrtQjAbwLY30Tr%2F7%2BRS%2FIHUZrwsUhQOnKFxg4PF19Ny0lznOfduMJn90skGOqUBk9lMZqcQ%2Ba14R6QFexAJ%2FADmmO4lMcHe3i0fW3egzpj7wzECXXnWSxw2Q5wQLKUG4APm%2BHm2Ys3ig2ngcm57BG0K4iXgwm6%2B3BcUgFusE5MVagRxrrdXjfPu68FdBAI6sSUKC2sr8MB9OACMeGcRqyYpJ%2BnexQYbIp6r%2BXciTIBmiA2VijRryp3DwTqdkW4wMQLf%2Bjs35vbc%2BN6iwwUR0C6P4iyw&X-Amz-Signature=522837f2da52b03c1911d2ecc093f38678fdcf1bfea22461d718d2800b60192f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675E367EV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRD5g9SEhSN2E%2Bef3v8yp0eA0mY2Gb9kDqENb5WCJ%2FcwIgZmcKMgRWwygPN5%2FbASPzLzfR5EaQnGW0BWerG%2FJArr8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8YipT7vvq0v10F%2BCrcAzMmDChFaJUivhjNFV6PQ9EKK7amtV7t6yeRgRdqkIBF9H1PhQvc5eH7nx4Wef3Ij3IMOaxBLJVar0L0uhPxr9%2B%2F%2BqsQeuNfakKLUPwSHv9jZOasTid2S%2FmtRrzFxj%2B2FXJuX62yTmjkdbwlZXc2IQrCrhMPKYhHdo7TDjEfLdLi0%2BPnLGA%2F3r9i2G3ZRUeqcnes42gxcb%2FlNrZ811OdsXv7C%2BxFc8A5UI3i9pB8x6Owb1aUwjgVF616m1YWsJp00j9FmVPjCOogAUaVaiSuOnLNqE9UOOnKzRKDZl33tcBykPeFR55af2eWVSB%2B7Q9jwYHWmNk0KynFL9m%2B1ktfq8gBZin1eIVJ%2BpTCW0qiNznLDubvTA1AyKbPZcWgv9d3KIQbwTiT4nU%2Fa6D7n10sf4OxrsHcYUzpIeSe8N84ze8X6PM0Vgf%2FHV4L1NgGjyey1XxiUijo3Rbh49MSVVHU1towgtSm2Dsg3WhC2Gb2E1k8nGZ0QXooPsNdKdYtQct1RcgZw3azdzBwPEEVIew4r0HNE%2BT6IvjSihiQR9Wbssp9rswcx3gz2MN2mllBMldWJUzcnJnQQWrtQjAbwLY30Tr%2F7%2BRS%2FIHUZrwsUhQOnKFxg4PF19Ny0lznOfduMJn90skGOqUBk9lMZqcQ%2Ba14R6QFexAJ%2FADmmO4lMcHe3i0fW3egzpj7wzECXXnWSxw2Q5wQLKUG4APm%2BHm2Ys3ig2ngcm57BG0K4iXgwm6%2B3BcUgFusE5MVagRxrrdXjfPu68FdBAI6sSUKC2sr8MB9OACMeGcRqyYpJ%2BnexQYbIp6r%2BXciTIBmiA2VijRryp3DwTqdkW4wMQLf%2Bjs35vbc%2BN6iwwUR0C6P4iyw&X-Amz-Signature=0d65d9b7e4ac0c502eaadfff5dae19838083795727690d7439a99f1736e2393b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

