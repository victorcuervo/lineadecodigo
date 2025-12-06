---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKWPROXV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T030724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyPbv3zSll4NwM3oDwgfNOmD7noLhgkFbg0aYcPIwX3AiBI9jyV7y1AGDkxM5KybtSYIHymPOXNiOMa3xXtRbxX7Cr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIM5e9QswKNiE3nevxrKtwDPknCANmdkGQbfosJt0IEHAPmeb1uk3K3ntjhmCb0GWxWV3Z2kdEBpHvAmV%2BcLVzegHSlLLxmRybwRCoiTTn%2BetPpAMmW1XSgKavx5oCMhBtkcGqp8kqUcnf6hnnshhiNV6%2BJsPPFSRE5cFRn9us%2FnN3qdvkN2KImNb5WIMYCERsDXf75nNYXwbMw0EhaovjbPhcTukklgAEHiyKe%2Fd%2BXT9rQr1TiP8auVwb%2BGjnxm4lxSr1hcAM9TmQ9QvPaPaDVwsi2EEzxAHDHVRlbm2TG2CM60kNd9imjLVacHJcdjiYsLSIz6rAyFG%2Fq0DldkgwsIx8MxU%2F0%2BTNCLkCMpDsDuoAhMqt2giGYGCdDxTxrPIbFSMzoL61nkMlR0g%2BiIMLRx%2BuAuTp%2BMXGDWi1TV1ubWjTCcUpQxp5RXzGUyx5%2BnKcHEcbLImgQLkG7hpzo59Las9lXgWeeBUKOT6WVzGIN86GcTGG%2B9LwZspw33l9CzEZrlW1QLCjSbmkxmPO0ymHsr7konUAy%2FYDJMw%2FibK%2F1dibVtvA%2Bfv0jbyMMQl30P7XO9T9TlcXGsmoE40SwO%2B0U5zawof1FG1kYOJZOAfaWK9FKa8kGo5JrIKJfzgYvzcqEH0j8Uy4gJX5LrIIw%2BafOyQY6pgHQyX%2F%2BlHdMkFZKx0STByfLZWfk3KSnaTjzm8yylIi2aECTM%2BMkrs8orCZ4H5iNUhgRri3L4k8XQW7MLUtekfNJ3Ftdui%2FK2Ud1Jx408ChnUd7AOatYHoaMDb3%2FLdq2txN2E8YDP%2FtGJZcLo5M0xT5DaYhS72xkiHM6i4jQkXuFeHaKHVRTx8hj7ykBGeUl8SnNzSpU7CMPsJQUL%2Fn%2FeXzUas5HCdjB&X-Amz-Signature=d6daa00f1b09fbe48e87bf97b8a753aa33eea7e882c72853fe3eefe51117d9cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKWPROXV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T030724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyPbv3zSll4NwM3oDwgfNOmD7noLhgkFbg0aYcPIwX3AiBI9jyV7y1AGDkxM5KybtSYIHymPOXNiOMa3xXtRbxX7Cr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIM5e9QswKNiE3nevxrKtwDPknCANmdkGQbfosJt0IEHAPmeb1uk3K3ntjhmCb0GWxWV3Z2kdEBpHvAmV%2BcLVzegHSlLLxmRybwRCoiTTn%2BetPpAMmW1XSgKavx5oCMhBtkcGqp8kqUcnf6hnnshhiNV6%2BJsPPFSRE5cFRn9us%2FnN3qdvkN2KImNb5WIMYCERsDXf75nNYXwbMw0EhaovjbPhcTukklgAEHiyKe%2Fd%2BXT9rQr1TiP8auVwb%2BGjnxm4lxSr1hcAM9TmQ9QvPaPaDVwsi2EEzxAHDHVRlbm2TG2CM60kNd9imjLVacHJcdjiYsLSIz6rAyFG%2Fq0DldkgwsIx8MxU%2F0%2BTNCLkCMpDsDuoAhMqt2giGYGCdDxTxrPIbFSMzoL61nkMlR0g%2BiIMLRx%2BuAuTp%2BMXGDWi1TV1ubWjTCcUpQxp5RXzGUyx5%2BnKcHEcbLImgQLkG7hpzo59Las9lXgWeeBUKOT6WVzGIN86GcTGG%2B9LwZspw33l9CzEZrlW1QLCjSbmkxmPO0ymHsr7konUAy%2FYDJMw%2FibK%2F1dibVtvA%2Bfv0jbyMMQl30P7XO9T9TlcXGsmoE40SwO%2B0U5zawof1FG1kYOJZOAfaWK9FKa8kGo5JrIKJfzgYvzcqEH0j8Uy4gJX5LrIIw%2BafOyQY6pgHQyX%2F%2BlHdMkFZKx0STByfLZWfk3KSnaTjzm8yylIi2aECTM%2BMkrs8orCZ4H5iNUhgRri3L4k8XQW7MLUtekfNJ3Ftdui%2FK2Ud1Jx408ChnUd7AOatYHoaMDb3%2FLdq2txN2E8YDP%2FtGJZcLo5M0xT5DaYhS72xkiHM6i4jQkXuFeHaKHVRTx8hj7ykBGeUl8SnNzSpU7CMPsJQUL%2Fn%2FeXzUas5HCdjB&X-Amz-Signature=428ed2cd1abd3405dcee1a70ae4b3605fbb2ac0409e9bb31e10433bc29d77eab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

