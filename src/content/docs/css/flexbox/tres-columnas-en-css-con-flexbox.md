---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBWHY7PG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T070711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQbvBL3JMLCksEQ1Krk5ejzro3bqSTrvxEKbCL1K9e%2BwIgaocnqAXbN3tj%2FEBk1MjP%2FmKnqTORW8PUqfCkse1Voh4q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKQp5NywkaxagJn2KCrcA3rHUTGFDhyYYeV6s9qw9REt7%2BrfJo29tMT8MwMSq2FXwiJUDO%2F0ALrD%2BOel9MnSoTFbVNQF3QfJ2hGOUU0b02EJDIw4xLoR2%2FT8Jt7C96M%2BJudiAYQKL64u5DedBHbOoAqKa2JHt%2BTqvaWJOLyQcilets1Z1NLMvg4kNFJ0Jya1wMm5nVmRG0gfqa7AHuKpkYtg03PO%2B%2FR680W7oWCR9GCHDpc8MfGorE8FylzNKWQQs6N7m99iu0V%2BF8N1MOw3uF7sp9t5HOE716y%2FoDzP5rT4EtEqwZkzQcVBwLPt6r0ZcsHpHTx9pLAfEbZU9NC0BzDvKQcnl%2FMgc64v1zXd3%2FEkmzgiHkT0%2Be%2BnSR3nDj7N%2FXC5hUUXetxMjwnI%2FEtlqJaAtTncIEbqxCycg1JYIbwPc4ZFCyxdG1fOpmeGvCYtvX6acmVsSdTid5GfCJy6fkvd2p3umjaMHgCXC5SfNSucM76K%2Fjj45ekWiqNo4A%2FBHJP99kLdmxBWsAQ9dNJtJOheSkb4LOLk7%2FMgJewWxui2YvNrq2LkaE%2Ftyu3Y18nRp4mAaZfrlFsXkmpoJnbjac85mOnFD7thT98RRZJtsitusCxCAcPzcTaVo4SzSTT4%2BYRFVDsThdX6qzJcMPCwyckGOqUBM96m%2BboKA3SV%2B55H8pJiKVMkpoeo%2FLUPV%2FKSY2TFMAuvNXELxwWurVxZeDGx3Mnb998ztfV4clM%2FnlGWfsMqDMJIzEFZNvTDRzCdcPJJawTYcFt11v4%2BRVtpYa4c6yrXS%2BvoEgXn7xB2pp3GoVcEOXBItdDe1ScpXFvmx0kjtFjgIqIjSpNUa%2FxYGfFGvocuH2UifmiB%2BtJwJ3MloAJdrOjxd6W8&X-Amz-Signature=29fcd6c529685f48b3d0f79fe3dba9edb8922cc215a729b40d361069a17b4051&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBWHY7PG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T070711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQbvBL3JMLCksEQ1Krk5ejzro3bqSTrvxEKbCL1K9e%2BwIgaocnqAXbN3tj%2FEBk1MjP%2FmKnqTORW8PUqfCkse1Voh4q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKQp5NywkaxagJn2KCrcA3rHUTGFDhyYYeV6s9qw9REt7%2BrfJo29tMT8MwMSq2FXwiJUDO%2F0ALrD%2BOel9MnSoTFbVNQF3QfJ2hGOUU0b02EJDIw4xLoR2%2FT8Jt7C96M%2BJudiAYQKL64u5DedBHbOoAqKa2JHt%2BTqvaWJOLyQcilets1Z1NLMvg4kNFJ0Jya1wMm5nVmRG0gfqa7AHuKpkYtg03PO%2B%2FR680W7oWCR9GCHDpc8MfGorE8FylzNKWQQs6N7m99iu0V%2BF8N1MOw3uF7sp9t5HOE716y%2FoDzP5rT4EtEqwZkzQcVBwLPt6r0ZcsHpHTx9pLAfEbZU9NC0BzDvKQcnl%2FMgc64v1zXd3%2FEkmzgiHkT0%2Be%2BnSR3nDj7N%2FXC5hUUXetxMjwnI%2FEtlqJaAtTncIEbqxCycg1JYIbwPc4ZFCyxdG1fOpmeGvCYtvX6acmVsSdTid5GfCJy6fkvd2p3umjaMHgCXC5SfNSucM76K%2Fjj45ekWiqNo4A%2FBHJP99kLdmxBWsAQ9dNJtJOheSkb4LOLk7%2FMgJewWxui2YvNrq2LkaE%2Ftyu3Y18nRp4mAaZfrlFsXkmpoJnbjac85mOnFD7thT98RRZJtsitusCxCAcPzcTaVo4SzSTT4%2BYRFVDsThdX6qzJcMPCwyckGOqUBM96m%2BboKA3SV%2B55H8pJiKVMkpoeo%2FLUPV%2FKSY2TFMAuvNXELxwWurVxZeDGx3Mnb998ztfV4clM%2FnlGWfsMqDMJIzEFZNvTDRzCdcPJJawTYcFt11v4%2BRVtpYa4c6yrXS%2BvoEgXn7xB2pp3GoVcEOXBItdDe1ScpXFvmx0kjtFjgIqIjSpNUa%2FxYGfFGvocuH2UifmiB%2BtJwJ3MloAJdrOjxd6W8&X-Amz-Signature=cf0daeb668ba5996f934a8c7bed804afaba2b2fed82e26ab5523600d9dae3d02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

