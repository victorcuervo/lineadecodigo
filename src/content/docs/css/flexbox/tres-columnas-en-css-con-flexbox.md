---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SO3EQ5D%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T111239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPwu44ITEunMs8P2YaAFppfpgY4GKNATuMm6kG1Tt0AgIhANrtS63fBYFKj1TY8sfKh6ihwhj8U2koglFqtsBM8nuKKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvNfZCrReFrY9beN8q3AO%2B01d%2F8khh1RZSEYTJZmH2WHr6AgV4ZtGxcJTLLWxZNhc8F5gX6Zp5kI6Mi3oEvRP8pO90ir6nyD9ljMSUwfVbRtOPEjGLVnronHWQffgE0yNhcnw4PYMCyh5QyAhsYb2b%2FUOTDeUBv9Z%2B7cdYKLertLvB1PJGEufqER0oXmWi6ybXLOqhoOJTa34OBgTDlKI1oZVuzRnlu4BPdwK6xTKNtpRCmhBEt15YftzElPq5VpGt5pgXKvxx0SxTyZheKhPB4PxYMC867qlWL4ARgZEX%2FGzKtgI4dpaIZ1WNZu%2FsXnNiuD%2B3NH4rj9f02RrjTjyu7GXblr54eT6vQK1TD72f%2BWkD21raakRsCNm%2FbCVOJilaouRHSCm08yLAjU7sO1FsY9D%2Bpg4NFz%2BHJWtVh0kXBfMXjYGVJZXoYhGnciRJ9A5EOHGVBxnOg4rE3DJxFgB6D4j57GRiQaFDus%2FzeHoUDNc%2BaYIEjUhZpeCamnueQHiJ7DfhRwuPfiF4Gf9WxAbLbDecq39aN9NJAk6zlxI4JypK4mg%2FVFd03DBTyKXcY69o72vNg%2FL8DWiwDktjfYsSms0JMLLKI30OW%2BtXH%2BNs6uHEPtR75ShflW0KxTqls2QmZpjPfZZ9%2BnnUNTCq7tnJBjqkAYOa7svwE7%2FUUkO0jSGJyiXRZfTjQO%2FEAaBr6jkbzpIM88h7%2Bw8YOfyFqFmax1Y4QdbwWtE80XUttWV6UXQZq5bFeUXt8JUVS4zchjEFwP8T8t9ivqUbcFAv8S67hORHCag6c5%2B7gC6295b2RtscFTM8Tsx4vqHkICKQl%2BYw36G6gOjGnZgD%2BizgcAhC9JgO0U3xRkqPUHklhLLa2ZqxoTUYfQiX&X-Amz-Signature=ffdfc65c8e6d632db5b5e6cf594e3fc45e8a808c24574338d93a71fb98a2c383&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SO3EQ5D%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T111239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPwu44ITEunMs8P2YaAFppfpgY4GKNATuMm6kG1Tt0AgIhANrtS63fBYFKj1TY8sfKh6ihwhj8U2koglFqtsBM8nuKKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvNfZCrReFrY9beN8q3AO%2B01d%2F8khh1RZSEYTJZmH2WHr6AgV4ZtGxcJTLLWxZNhc8F5gX6Zp5kI6Mi3oEvRP8pO90ir6nyD9ljMSUwfVbRtOPEjGLVnronHWQffgE0yNhcnw4PYMCyh5QyAhsYb2b%2FUOTDeUBv9Z%2B7cdYKLertLvB1PJGEufqER0oXmWi6ybXLOqhoOJTa34OBgTDlKI1oZVuzRnlu4BPdwK6xTKNtpRCmhBEt15YftzElPq5VpGt5pgXKvxx0SxTyZheKhPB4PxYMC867qlWL4ARgZEX%2FGzKtgI4dpaIZ1WNZu%2FsXnNiuD%2B3NH4rj9f02RrjTjyu7GXblr54eT6vQK1TD72f%2BWkD21raakRsCNm%2FbCVOJilaouRHSCm08yLAjU7sO1FsY9D%2Bpg4NFz%2BHJWtVh0kXBfMXjYGVJZXoYhGnciRJ9A5EOHGVBxnOg4rE3DJxFgB6D4j57GRiQaFDus%2FzeHoUDNc%2BaYIEjUhZpeCamnueQHiJ7DfhRwuPfiF4Gf9WxAbLbDecq39aN9NJAk6zlxI4JypK4mg%2FVFd03DBTyKXcY69o72vNg%2FL8DWiwDktjfYsSms0JMLLKI30OW%2BtXH%2BNs6uHEPtR75ShflW0KxTqls2QmZpjPfZZ9%2BnnUNTCq7tnJBjqkAYOa7svwE7%2FUUkO0jSGJyiXRZfTjQO%2FEAaBr6jkbzpIM88h7%2Bw8YOfyFqFmax1Y4QdbwWtE80XUttWV6UXQZq5bFeUXt8JUVS4zchjEFwP8T8t9ivqUbcFAv8S67hORHCag6c5%2B7gC6295b2RtscFTM8Tsx4vqHkICKQl%2BYw36G6gOjGnZgD%2BizgcAhC9JgO0U3xRkqPUHklhLLa2ZqxoTUYfQiX&X-Amz-Signature=99295b93678fe38dba8db1ef155ec78fbeabfddf9bf03ce121c89e6db65591da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

