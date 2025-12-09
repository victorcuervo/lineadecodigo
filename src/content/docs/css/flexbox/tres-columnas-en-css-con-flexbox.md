---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662GXSWE4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T100755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9FCdVenbs%2Fy2usDXt%2FmunM7nLCfO0EX3A3dt1Q3juMAiEAs5cjkTOrgySZttCRWIV4yxeUKfq8y73FM%2Fw4RG5wyw4qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuozAf%2FG%2F63KLCQqCrcAyZ5N2lE00ZcQTR%2BWqEgserVHnVQSP7R2B%2FNmFtmQTB8kwl0RIEIUq2I6%2B9pxr7Y3vy4wt3k3paFld1tbAtxwt%2BYjL4kQYHQnqEe%2Fy7jTB3o4fno1LHRlU6s4M4UMbi3xdZ6umNo91XMNFwFkQ4sBF0Kwl4744hNzIg34ihQ8lZmy0nXP%2Bci%2Fqa6PbBrd1UKerpvDTyJzJOLK3DFYLcg6LfOa70lrGVrKzOZh8Lp7v9Zh%2BjRnU82KhQyNdIt6X6i7AiUZgs20qiOzbnRRuJybifMiZlUTOECZqd8DBr0JsDeZJ8tC%2B0PXQUU0Ozulzw12gcJPGOGGLfTBL2UKOyz6gOMBoJtTrq1%2FA6F2l8QfHqVaKMe4U%2F3HO70FueWW72ciTphxyvD0Dtn%2BWpjIqMw%2BylWU5HnwbAyXFn9WL5Tdb%2FZRsOEO2Io%2FsMRe28R4s2PnvHCljMNCQ0IOpGdTVPzCNfM7hldRYO%2Bav8YwmLh82yuUTRspAzeX4VDmKqZwwdrz1p1UYh0qKRBFlsEu5IO2MhH9INGFoEiFRnLB4AZhEjiBtmIBCqDlP4aGUOIxfFb2FJLlxxC67Nt6GArX%2FdSGLzd9%2BQYkfjDHn9qs6NDVDwFKgSH1%2BOJDcEnx7JdML%2FE38kGOqUBrT6CYFYv6jfv9kp%2B67kVJLYQB81bdGaJTmwa8PiIdP4U0Xadd3CX6NyJZOvmIzlzMwZcfDdiWMr0CjyjrOPuNoQ%2Bp6UX%2FK2b4AsXgnmIDFAZH1K6tcBmQ2BDTHShAU0CrHtyLJmRC%2FlV%2BKVBKgl4cfA%2BNLtJtbiLy%2BpNWCPN5dG3qilmARwF2oES4%2FLkXkxH8wEZ9hlnjYUUG4Qignam30SlqKHu&X-Amz-Signature=eafa2200ee09448146cd3dcd32315d2b6b96d55ff0053aadd7e26adc550a2306&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662GXSWE4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T100755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9FCdVenbs%2Fy2usDXt%2FmunM7nLCfO0EX3A3dt1Q3juMAiEAs5cjkTOrgySZttCRWIV4yxeUKfq8y73FM%2Fw4RG5wyw4qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuozAf%2FG%2F63KLCQqCrcAyZ5N2lE00ZcQTR%2BWqEgserVHnVQSP7R2B%2FNmFtmQTB8kwl0RIEIUq2I6%2B9pxr7Y3vy4wt3k3paFld1tbAtxwt%2BYjL4kQYHQnqEe%2Fy7jTB3o4fno1LHRlU6s4M4UMbi3xdZ6umNo91XMNFwFkQ4sBF0Kwl4744hNzIg34ihQ8lZmy0nXP%2Bci%2Fqa6PbBrd1UKerpvDTyJzJOLK3DFYLcg6LfOa70lrGVrKzOZh8Lp7v9Zh%2BjRnU82KhQyNdIt6X6i7AiUZgs20qiOzbnRRuJybifMiZlUTOECZqd8DBr0JsDeZJ8tC%2B0PXQUU0Ozulzw12gcJPGOGGLfTBL2UKOyz6gOMBoJtTrq1%2FA6F2l8QfHqVaKMe4U%2F3HO70FueWW72ciTphxyvD0Dtn%2BWpjIqMw%2BylWU5HnwbAyXFn9WL5Tdb%2FZRsOEO2Io%2FsMRe28R4s2PnvHCljMNCQ0IOpGdTVPzCNfM7hldRYO%2Bav8YwmLh82yuUTRspAzeX4VDmKqZwwdrz1p1UYh0qKRBFlsEu5IO2MhH9INGFoEiFRnLB4AZhEjiBtmIBCqDlP4aGUOIxfFb2FJLlxxC67Nt6GArX%2FdSGLzd9%2BQYkfjDHn9qs6NDVDwFKgSH1%2BOJDcEnx7JdML%2FE38kGOqUBrT6CYFYv6jfv9kp%2B67kVJLYQB81bdGaJTmwa8PiIdP4U0Xadd3CX6NyJZOvmIzlzMwZcfDdiWMr0CjyjrOPuNoQ%2Bp6UX%2FK2b4AsXgnmIDFAZH1K6tcBmQ2BDTHShAU0CrHtyLJmRC%2FlV%2BKVBKgl4cfA%2BNLtJtbiLy%2BpNWCPN5dG3qilmARwF2oES4%2FLkXkxH8wEZ9hlnjYUUG4Qignam30SlqKHu&X-Amz-Signature=73f9f554cf341a650e127508ac8f9af332bfeb245879b96eaa733ccc9f779813&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

