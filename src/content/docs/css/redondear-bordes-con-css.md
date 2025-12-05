---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
slug: /css/redondear-bordes-con-css/
author: victor_cuervo
---

Gracias a [CSS3](https://www.manualweb.net/css/) podemos redondear los bordes de los elementos. Y es que para redondear bordes con [CSS3](https://www.manualweb.net/css/) utilizaremos la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/).


La sintaxis general de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) es la siguiente:


```css
border-radius: [tamaño|porcentaje];
```


De esta forma podemos indicar **el tamaño o porcentaje** en el que se redondeará cada una de las esquinas de la capa. El valor corresponde con el radio de la circunferencia trazada en la esquina.


Así, si utilizamos:


```css
border-radius: 15px;
```


Veremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTRWBEKE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T225429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEthq6dj08%2Bk23BPDtB%2FZ3JvDfvjlm%2FziEnPBCLsxfCFAiEAofE%2FcxZKL7ddyM%2FPp1J9pvLH9eVFuCHky%2FXa1%2FLS5P0q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDND4hd951NVtsBl0hyrcAyyGtiRaEVNNPAjDMEuLuo91orVvOWWgpHchvHHa%2BwLE3WmJ%2BaZRcv%2BCA6j0PvIRhlZTv7VFSmbUUWzZsJIk2W2JHCNKK9z0rxhMLHeR0VTa%2FqgFXtW4TyAUskQFOcDrkpfNlXCBMMrecHtVbxjDO8KMqUsKXlHjWA20goWRfY3rsaLWTcVQx9hg6FA%2F8jei%2BeKdP12sEtxOCRX80zhNs3ZjzxzhlvKbLnlPuxXSuMyFMQipYE2PmS5lG9%2BD0tumhc25zi2hbYIHADlUWQ6zyppyq9gJGTmntaX%2Fn%2FftGpXAAa468kEMbNL2D%2BPKvZBhC1%2BDJ1uCR8aPnx2%2BBGqvikL1jsm%2FpPy7l6jwpvKIhqPidTJi7BJDrX%2F%2FvzHR6UUmQjKEfz2XhXowBanBzh%2B4JsByBwE7OWs9ASk8tbPRMj52EqMsiN3yGsL4qviBfYR0ej%2FR4kfl2yUyMag%2BI425pvJ4LRU1olUg%2BOii%2FhQ8f1SspQEbKgbsaNs6ZLKRUYeWz1rcjYqAUejZGvN9oIeQVNVn3VDAq8Le0zW9lMI4wzVQh7MjvTox%2BgJHKMgmZsE%2FgKe%2BSIMZrMOJ%2B9fhi4wbMT8kSdmHXyATzJ9IPQP4Y3RrsDBagtTwsYegj4WaMJeYzckGOqUBTHp4%2FlTreMdoqQE80O5bsabYfcSOCTvvW5TZhzd5ziCatOaq5H5N%2F%2FIJaU0z1ba1UQFyDKuL3sQUjaShLVlHkNTxuXzckqcCsJV435bVUaRbyWFT8L%2FjxAVG6jZnM%2FmKbv6WNQExFL5gXlVZToFRBznJhWCCC1e%2BPqgn%2FU%2FkrH23drNH9FXYdOQOc9sr2n%2FBFNYtLiIaGquV61umkCNZAW4kUZ38&X-Amz-Signature=a1450bd3fc9a1d26f01ddf4f0c7e027c9c5ed9e6aeef3d6f418d14f4e036c219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Podemos especificar un radio para cada una de las esquinas. En este caso se aplicará el orden de las agujas del reloj, empezado por la esquina superior izquierda, siguiendo por la esquina superior derecha, esquina inferior derecha y esquina inferior izquierda.


```css
border-radius: 5px 30px 45px 60px;
```


Si bien tenemos la capacidad de indicar el tamaño de cada de las esquinas por separado mediante las propiedades: border-top-left-radius, border-bottom-left-radius, border-top-right-radius y border-bottom-right-radius.


```css
border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Cuando identificamos los radios de las esquinas por separado podemos indicar de forma diferente los dos radios que conforman la esquina. Por ejemplo, podríamos modificar la esquina superior izquierda de la siguiente forma:


```css
border-top-left-radius: 400px 200px;
```


Y obtendremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTRWBEKE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T225429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEthq6dj08%2Bk23BPDtB%2FZ3JvDfvjlm%2FziEnPBCLsxfCFAiEAofE%2FcxZKL7ddyM%2FPp1J9pvLH9eVFuCHky%2FXa1%2FLS5P0q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDND4hd951NVtsBl0hyrcAyyGtiRaEVNNPAjDMEuLuo91orVvOWWgpHchvHHa%2BwLE3WmJ%2BaZRcv%2BCA6j0PvIRhlZTv7VFSmbUUWzZsJIk2W2JHCNKK9z0rxhMLHeR0VTa%2FqgFXtW4TyAUskQFOcDrkpfNlXCBMMrecHtVbxjDO8KMqUsKXlHjWA20goWRfY3rsaLWTcVQx9hg6FA%2F8jei%2BeKdP12sEtxOCRX80zhNs3ZjzxzhlvKbLnlPuxXSuMyFMQipYE2PmS5lG9%2BD0tumhc25zi2hbYIHADlUWQ6zyppyq9gJGTmntaX%2Fn%2FftGpXAAa468kEMbNL2D%2BPKvZBhC1%2BDJ1uCR8aPnx2%2BBGqvikL1jsm%2FpPy7l6jwpvKIhqPidTJi7BJDrX%2F%2FvzHR6UUmQjKEfz2XhXowBanBzh%2B4JsByBwE7OWs9ASk8tbPRMj52EqMsiN3yGsL4qviBfYR0ej%2FR4kfl2yUyMag%2BI425pvJ4LRU1olUg%2BOii%2FhQ8f1SspQEbKgbsaNs6ZLKRUYeWz1rcjYqAUejZGvN9oIeQVNVn3VDAq8Le0zW9lMI4wzVQh7MjvTox%2BgJHKMgmZsE%2FgKe%2BSIMZrMOJ%2B9fhi4wbMT8kSdmHXyATzJ9IPQP4Y3RrsDBagtTwsYegj4WaMJeYzckGOqUBTHp4%2FlTreMdoqQE80O5bsabYfcSOCTvvW5TZhzd5ziCatOaq5H5N%2F%2FIJaU0z1ba1UQFyDKuL3sQUjaShLVlHkNTxuXzckqcCsJV435bVUaRbyWFT8L%2FjxAVG6jZnM%2FmKbv6WNQExFL5gXlVZToFRBznJhWCCC1e%2BPqgn%2FU%2FkrH23drNH9FXYdOQOc9sr2n%2FBFNYtLiIaGquV61umkCNZAW4kUZ38&X-Amz-Signature=dc8379c7bedf92b4f100bd7ae6e9345ace206d631aacf60c78b57f822c87f17f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```text
border-radius: [tamaño|porcentaje] {1,4} [tamaño|porcentaje] {1,4};
```


Por último tenemos que ser conscientes del soporte de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) de [CSS3](https://www.manualweb.net/css/). Ya que no todos los navegadores van a poder ejecutarla. En esos casos, los bordes que hayamos redondeado no se verán.


La implementación de [`border-radius`](https://w3api.com/CSS/border-radius/) que hemos visto es la de la [W3C](https://w3.org/). Hay implementaciones propietarias en los motores de renderizado de los browsers. Este es el caso de [Mozilla Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/). Dónde las propiedades para redondear los borders con [CSS](https://www.manualweb.net/css/) están especificadas como:


```css
-moz-border-radius: [tamaño|porcentaje];
-moz-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


En el caso de Webkit (sería, por ejemplo, para versiones antiguas de [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/)) se soportaba mediante el prefijo `-webkit`:


```text
-webkit-border-radius: [tamaño|porcentaje];
-webkit-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Por lo cual, si queremos buscar compatibilidad con nuestros ejemplos anteriores podemos poner lo siguiente:


```css
border-radius: 15px;
-moz-border-radius: 15px;
-webkit-border-radius: 15px;
```


```css
border-radius: 5px 30px 45px 60px;
-moz-border-radius: 5px 30px 45px 60px;
-webkit-border-radius: 15px;
```


```css
border-top-left-radius: 400px 200px;
-moz-border-top-left-radius: 400px 200px;
-webkit-border-radius: 15px;
```


Los navegadores a partir de los cuales se empezó a dar soporte a [`border-radius`](https://w3api.com/CSS/border-radius/) son:

- [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 0.2 (con -webkit) y [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 4.0 (con el estándar)
- [Opera](https://ayudaenlaweb.com/navegadores/que-es-opera/) 10.5
- [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 3.0 (con -webkit) y [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 5.0 (con el estándar)
- [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 1.0 (con -moz) y [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 4.0 (con el estándar)
- [Internet Explorer](https://ayudaenlaweb.com/navegadores/que-es-internet-explorer/) 9
