---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTBPM3EP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T033538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1orRdctrkJNriKSIwHiXK6io%2Bne%2BVyhA0dz9Lho1uiAiByuuf7%2FCpAzWogXSMh608180TIVX7ioqEEdhkdjLbspCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxH9b1X%2BTiesoiMDgKtwDlJckQSZQd24%2F19jg62N8aT0qnaaGR7Wnoqt%2BxosDl0MZso07TXCnIRF7WIvJdOsDHzP5UWlTsz%2BsjlmpO7x5VfF5VMt2PbjviOSscs1qZ6Kbh8t2h0rA%2FG%2FTENscb4Y3GzHtFci3A%2FgpcFJaistZneqxKRsVOJtfgLRu4ThJKyWPKl9i6Va4MfclOWbuR%2F%2BsGcCQrrC%2BIrQIv47HhfBrAAKrFUy4yxRTSnNWotQSwbn2sD4s83IxGx2htXXHCmzZZp6s0tIkujknPyEhQ9SiPNN6a%2BBc7%2BOdjndr2esoTJZlsmLKDBH6NAOqscw7Y8ppI%2FMtgTby8U4hrEyHQmWjfF0nEnKX7IYchVhZn9yLeQx0lMkeeKSKy%2FiRS%2BJCNjWrzxaczC0toghQgP6s1D99Nx0f3SvOVNhR6zv9Kc%2F%2B2IHDRjVblp%2BFxyJmJ2OQmjuij1fv4rAC6HNh%2BDH%2B6B8t7KlTjP%2FWWRc8A4WyeZoRsUKLeDgJ0ndEGw0XW68KpjGltYqCE6jALVWa5ewedzKpqfgJidPEJHjq62oFq%2F873tlZ6hcXbOnwOcCFEYJSAfcko9R1druXxH10wTNHT5vzZn5aVJtdBY45P38d6rxwV3RYA6UENBvOiJSGFngwjf7SyQY6pgGHl7s2PjbPJ1T2WZyuBw92YWuGVKiKAjxo8VKQ0gqCf79W%2BgLvJDsBEufWam6xhStHx%2FmXKSCAV7Sk7sGrwnvNF31%2BOeiPHv5y74hM6jyjLWKiH3i%2B9Oxt%2FrmUvONVG9tpDmVYm3SUS%2BqvlGJyz2ybuITAOBCrsZiKAivcNd%2BdunwfaFsv6Wx6w2GnTM9MOt3x22BcINfoL94gnzb7f%2F9VlWl4dBNZ&X-Amz-Signature=d637114f54562822cf1b6bae141fc6a07573eb0ae80db99bb231d0e3ba55ca9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTBPM3EP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T033538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1orRdctrkJNriKSIwHiXK6io%2Bne%2BVyhA0dz9Lho1uiAiByuuf7%2FCpAzWogXSMh608180TIVX7ioqEEdhkdjLbspCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxH9b1X%2BTiesoiMDgKtwDlJckQSZQd24%2F19jg62N8aT0qnaaGR7Wnoqt%2BxosDl0MZso07TXCnIRF7WIvJdOsDHzP5UWlTsz%2BsjlmpO7x5VfF5VMt2PbjviOSscs1qZ6Kbh8t2h0rA%2FG%2FTENscb4Y3GzHtFci3A%2FgpcFJaistZneqxKRsVOJtfgLRu4ThJKyWPKl9i6Va4MfclOWbuR%2F%2BsGcCQrrC%2BIrQIv47HhfBrAAKrFUy4yxRTSnNWotQSwbn2sD4s83IxGx2htXXHCmzZZp6s0tIkujknPyEhQ9SiPNN6a%2BBc7%2BOdjndr2esoTJZlsmLKDBH6NAOqscw7Y8ppI%2FMtgTby8U4hrEyHQmWjfF0nEnKX7IYchVhZn9yLeQx0lMkeeKSKy%2FiRS%2BJCNjWrzxaczC0toghQgP6s1D99Nx0f3SvOVNhR6zv9Kc%2F%2B2IHDRjVblp%2BFxyJmJ2OQmjuij1fv4rAC6HNh%2BDH%2B6B8t7KlTjP%2FWWRc8A4WyeZoRsUKLeDgJ0ndEGw0XW68KpjGltYqCE6jALVWa5ewedzKpqfgJidPEJHjq62oFq%2F873tlZ6hcXbOnwOcCFEYJSAfcko9R1druXxH10wTNHT5vzZn5aVJtdBY45P38d6rxwV3RYA6UENBvOiJSGFngwjf7SyQY6pgGHl7s2PjbPJ1T2WZyuBw92YWuGVKiKAjxo8VKQ0gqCf79W%2BgLvJDsBEufWam6xhStHx%2FmXKSCAV7Sk7sGrwnvNF31%2BOeiPHv5y74hM6jyjLWKiH3i%2B9Oxt%2FrmUvONVG9tpDmVYm3SUS%2BqvlGJyz2ybuITAOBCrsZiKAivcNd%2BdunwfaFsv6Wx6w2GnTM9MOt3x22BcINfoL94gnzb7f%2F9VlWl4dBNZ&X-Amz-Signature=385cfcfc66d940c7d9ed7ab97fae204eaef28e589c95426f04bef72c7411fb32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

